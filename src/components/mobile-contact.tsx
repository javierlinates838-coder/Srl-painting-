"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { SrlIcon } from "./srl-icon";

// Slides in once the hero's own call-to-action buttons have scrolled away.
export function MobileContact() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 640);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className={visible ? "mobile-contact is-visible" : "mobile-contact"} inert={!visible}>
      <a href={`tel:${site.phoneTel}`}>
        <SrlIcon name="phone" /> Call
      </a>
      <a href="#contact" className="is-primary">
        Free estimate <SrlIcon name="arrow" />
      </a>
    </div>
  );
}
