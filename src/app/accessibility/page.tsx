import type { Metadata } from "next";
import { InformationPage } from "@/components/information-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Assistance | SRL Painting",
  description:
    "Contact SRL Painting for help with website information or to report an accessibility barrier.",
  alternates: { canonical: "/accessibility" },
  openGraph: {
    title: "Accessibility Assistance | SRL Painting",
    url: "/accessibility",
  },
};

export default function AccessibilityPage() {
  return (
    <InformationPage
      title="Let’s make it easier to connect."
      intro="If something on this website is difficult to use, you can contact SRL without completing the online form."
    >
      <section>
        <h2>Contact us another way</h2>
        <p>
          Call <a href={`tel:${site.phoneTel}`}>{site.phone}</a>,{" "}
          <a href={`sms:${site.phoneTel}`}>send a text message</a>, or{" "}
          <a href={site.instagramDm} target="_blank" rel="noopener noreferrer">
            message SRL on Instagram
          </a>
          . Tell us the information or service you need and your preferred way
          to communicate.
        </p>
      </section>
      <section>
        <h2>Report a website barrier</h2>
        <p>
          When possible, include the page address, what you were trying to do,
          and what prevented you from doing it. You can also share your browser
          or assistive technology if useful. You do not need to disclose a
          diagnosis or medical information.
        </p>
      </section>
      <section>
        <h2>Features available on this site</h2>
        <ul>
          <li>A skip-to-content link and visible keyboard-focus indicators.</li>
          <li>
            Text labels for the inquiry fields, announced submission feedback,
            and descriptions for project images.
          </li>
          <li>
            The photo divider works with dragging or arrow keys. A single reset
            button restores its centered position. Reviews change only when you select them.
            Reduced-motion settings disable introductory animations and transitions.
          </li>
          <li>Browser zoom and a layout that adapts to smaller screens.</li>
        </ul>
        <p>
          These features are not a certification of ADA or WCAG compliance.
          Accessibility requires ongoing testing and improvements, including
          feedback from people using assistive technologies. Third-party sites
          may work differently.
        </p>
      </section>
    </InformationPage>
  );
}
