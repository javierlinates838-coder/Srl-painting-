import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ColorStudio } from "@/components/color-studio";

export const metadata: Metadata = {
  title: "Color Studio | SRL Painting Bakersfield",
  description: "Try paint colors on a house exterior, a living room, or kitchen cabinets, then send your favorite combo with your free estimate request.",
  alternates: { canonical: "/color-studio" },
};

export default function ColorStudioPage() {
  return (
    <>
      <PageHero kicker="Color studio" title="Try it before" accent="we paint it." tone="paper">
        <p>
          Picking colors is the hard part. Pick a space, play with the colors,
          then send the combo you like along with your estimate request.
        </p>
      </PageHero>
      <section className="section studio-section">
        <div className="shell">
          <ColorStudio />
        </div>
      </section>
    </>
  );
}
