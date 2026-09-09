// Approximate locality centers, not service boundaries or driving routes.
// Reference: https://oriseapps.orau.gov/cedr/pdf/hist-docs/949.pdf
// Lake Isabella locality: https://www.wikidata.org/wiki/Q2495360
const places = [
  { name: "Bakersfield", lat: 35.358, lon: -119.019, home: true },
  { name: "Shafter", lat: 35.489, lon: -119.287, home: false },
  { name: "Lake Isabella", lat: 35.613, lon: -118.478, home: false },
  { name: "Tehachapi", lat: 35.114, lon: -118.453, home: false },
];
const point = (lat: number, lon: number) => ({
  x: 40 + ((lon + 119.55) / 1.45) * 440,
  y: 32 + ((35.8 - lat) / .8) * 280,
});

export function ServiceAreaMap() {
  return (
    <figure className="service-area-map">
      <div className="area-map-heading"><span className="eyebrow">BAKERSFIELD & BEYOND</span><span>Kern County, CA</span></div>
      <svg viewBox="0 0 520 355" role="img" aria-labelledby="area-map-title area-map-description">
        <title id="area-map-title">Bakersfield and nearby service areas</title>
        <desc id="area-map-description">Regional locator map with Bakersfield as the home base, Shafter to the northwest, Lake Isabella to the northeast, and Tehachapi to the southeast. Locations are approximate; this is not a driving map or a service boundary.</desc>
        <defs><pattern id="area-map-grid" width="52" height="52" patternUnits="userSpaceOnUse"><path d="M52 0H0V52" fill="none" stroke="currentColor" strokeWidth=".6" /></pattern></defs>
        <rect width="520" height="355" fill="url(#area-map-grid)" className="area-map-grid" />
        <g className="area-map-compass" aria-hidden="true"><path d="M466 62V29m-5 6 5-6 5 6" fill="none" stroke="currentColor" strokeWidth="1.5" /><text x="466" y="20" textAnchor="middle">N</text></g>
        {places.map((place) => {
          const { x, y } = point(place.lat, place.lon);
          return <g key={place.name} className={place.home ? "map-place map-home" : "map-place"}>
            {place.home ? <circle cx={x} cy={y} r="27" className="map-home-ring" /> : null}
            <circle cx={x} cy={y} r={place.home ? 10 : 6} className="map-dot" />
            <text x={x} y={y + (place.name === "Shafter" || place.name === "Lake Isabella" ? -19 : 35)} textAnchor="middle">{place.name}</text>
            {place.home ? <text x={x} y={y + 54} textAnchor="middle" className="map-home-note">SRL HOME BASE</text> : null}
          </g>;
        })}
        <text x="28" y="329" className="map-region-label">SOUTHERN SAN JOAQUIN VALLEY</text>
      </svg>
      <figcaption><span>Approximate locations · Ask about availability</span><a href="https://www.google.com/maps/search/?api=1&query=Bakersfield%2C%20California" target="_blank" rel="noopener noreferrer" aria-label="Explore Bakersfield in Google Maps (opens in a new tab)">Open map ↗</a></figcaption>
    </figure>
  );
}
