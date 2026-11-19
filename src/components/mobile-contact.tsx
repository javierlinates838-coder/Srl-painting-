"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { SrlIcon } from "./srl-icon";

// Phone call / estimate bar that slides in after the first screen.
export function MobileContact() {
  const [visible, setVisible] = useState(false);
  const onContact = usePathname().replace(/\.html$/, "").endsWith("/contact");
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 520);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const show = visible && !onContact;
  return (
    <div className={show ? "mobile-contact is-visible" : "mobile-contact"} inert={!show}>
      <a href={`tel:${site.phoneTel}`}>
        <SrlIcon name="phone" /> Call
      </a>
      <Link href="/contact" className="is-primary">
        Free estimate <SrlIcon name="arrow" />
      </Link>
    </div>
  );
}
