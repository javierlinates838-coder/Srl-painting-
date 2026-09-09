"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";

const places = [
  { name: "Bakersfield", lat: 35.3733, lon: -119.0187, note: "Our home base", zoom: 11 },
  { name: "Shafter", lat: 35.489, lon: -119.287, note: "Ask about project availability", zoom: 11 },
  { name: "Tehachapi", lat: 35.114, lon: -118.453, note: "Ask about project availability", zoom: 11 },
  { name: "Lake Isabella", lat: 35.613, lon: -118.478, note: "Ask about project availability", zoom: 11 },
  { name: "Los Angeles", lat: 34.0522, lon: -118.2437, note: "Projects by arrangement", zoom: 10 },
];
const overview: [[number, number], [number, number]] = [[35.05, -119.4], [35.7, -118.25]];

export function ServiceAreaMap() {
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<LeafletMap | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    let disposed = false;
    let started = false;
    let resize: ResizeObserver | undefined;
    async function start() {
      if (started) return;
      started = true;
      try {
        const L = await import("leaflet");
        if (disposed) return;
        const instance = L.map(element!, {
          scrollWheelZoom: false, dragging: !L.Browser.mobile,
          touchZoom: false, doubleClickZoom: false, zoomControl: false,
          minZoom: 6, maxZoom: 16, zoomAnimation: false,
        });
        map.current = instance;
        instance.fitBounds(overview, { padding: [28, 32] });
        L.control.zoom({ position: "topright" }).addTo(instance);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19, keepBuffer: 0, updateWhenIdle: true,
        }).on("tileerror", () => { if (!disposed) setFailed(true); })
          .on("tileload", () => { if (!disposed) setFailed(false); }).addTo(instance);
        places.forEach((place, index) => {
          L.marker([place.lat, place.lon], {
            title: place.name + ": " + place.note, alt: place.name,
            icon: L.divIcon({ className: index === 0 ? "srl-map-pin home-pin" : "srl-map-pin",
              html: "<span>" + (index === 0 ? "SRL" : String(index + 1).padStart(2, "0")) + "</span>",
              iconSize: index === 0 ? [44, 44] : [32, 32], iconAnchor: index === 0 ? [22, 22] : [16, 16],
            }),
          }).bindTooltip(place.name, { direction: "bottom", offset: [0, index === 0 ? 22 : 16], permanent: index === 0, className: "srl-map-tooltip" })
            .on("click", () => setSelected(index)).addTo(instance);
        });
        resize = new ResizeObserver(() => instance.invalidateSize({ pan: false }));
        resize.observe(element!);
        setReady(true);
      } catch { if (!disposed) setFailed(true); }
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) { observer.disconnect(); void start(); }
    });
    observer.observe(element);
    return () => { disposed = true; observer.disconnect(); resize?.disconnect(); map.current?.remove(); map.current = null; };
  }, []);

  function focusPlace(index: number) {
    setSelected(index);
    const place = places[index];
    map.current?.setView([place.lat, place.lon], place.zoom, { animate: false });
  }
  return (
    <figure className="regional-map-card">
      <div className="regional-map-top"><div><span className="eyebrow">OUR NEIGHBORHOOD & BEYOND</span><h3>Bakersfield is home.</h3></div><span className="regional-map-tag">KERN COUNTY, CA</span></div>
      <div className="regional-map-stage">
        <div ref={container} className="regional-map-canvas" role="region" aria-label="Interactive service-area map. Use the city buttons or map zoom controls to explore." />
        {!ready && !failed ? <div className="regional-map-loading" role="status">Loading the neighborhood map…</div> : null}
        {failed ? <p className="regional-map-error" role="status">Some map details couldn’t load. You can still explore the city list below.</p> : null}
        <button className="regional-map-reset" type="button" disabled={!ready} onClick={() => { setSelected(null); map.current?.fitBounds(overview, { padding: [28, 32], animate: false }); }}>Regional view</button>
      </div>
      <figcaption className="regional-map-summary" aria-live="polite"><strong>{selected === null ? "Rooted here. Ready for your project." : places[selected].name}</strong><span>{selected === null ? "Select a community to take a closer look." : places[selected].note}</span></figcaption>
      <div className="regional-map-cities" aria-label="Explore service areas">
        {places.map((place, index) => <button type="button" key={place.name} onClick={() => focusPlace(index)} aria-pressed={selected === index}><span className="map-city-number">{String(index + 1).padStart(2, "0")}</span><span>{place.name}</span><span aria-hidden="true">↗</span></button>)}
      </div>
      <div className="regional-map-foot"><span>City markers, not office locations or service boundaries.</span><a href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent((selected === null ? "Bakersfield" : places[selected].name) + ", California")} target="_blank" rel="noopener noreferrer">Open full map ↗</a></div>
    </figure>
  );
}
