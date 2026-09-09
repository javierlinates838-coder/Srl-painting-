import type { Metadata } from "next";
import Link from "next/link";
import { InformationPage } from "@/components/information-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website & Estimate Information | SRL Painting",
  description:
    "How SRL Painting website inquiries, estimates, project information, and external links work.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Website & Estimate Information | SRL Painting",
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <InformationPage
      title="Clear expectations, from the start."
      intro="A few important details about this website and asking SRL Painting for an estimate."
    >
      <section>
        <h2>An inquiry is not a construction contract</h2>
        <p>
          Submitting the estimate form is free. It requests a conversation about
          your project; it does not book a start date, authorize work, set a
          final price, or require a payment. This website does not accept
          deposits or payments.
        </p>
        <p>
          Project scope, preparation, materials, price, scheduling, payment
          terms, and any warranty must be confirmed in a separate written
          agreement before work starts. Website information is not a substitute
          for that agreement or any notices required by law.
        </p>
      </section>
      <section>
        <h2>Project-specific details matter</h2>
        <p>
          Availability and timing depend on scope, surface condition, access,
          weather, drying time, and material availability. Service descriptions
          and project photos are examples, not promises that a particular
          finish, color, cost, or completion date will apply to every project.
        </p>
        <p>
          Screen settings and lighting affect color appearance. Approve physical
          paint samples and the proposed finish with your contractor. Confirm
          which preparation, repairs, and surfaces are included in your written
          scope.
        </p>
      </section>
      <section id="inquiries">
        <h2>How your website inquiry is handled</h2>
        <p>
          The form asks for your name, phone number, city, service, preferred
          contact method, and project details, plus an optional email address.
          When email delivery is configured, the website passes this information
          to an email service for delivery to SRL Painting’s designated inbox.
        </p>
        <p>
          If delivery cannot be confirmed, the page keeps your entered details
          and offers a copy, text-message, or Instagram option. Opening a draft
          does not send it; you must send it in your messaging app. Do not
          include payment-card details, identity documents, medical information,
          or other sensitive information.
        </p>
        <p>
          Submitting asks SRL to respond about this inquiry using your selected
          contact method, not to enroll you in promotional messages. Standard
          carrier charges may apply to texts you send or receive. For questions
          about your information or to request access, correction, or deletion,
          call <a href={`tel:${site.phoneTel}`}>{site.phone}</a>. This
          explanation of the form is not a complete business privacy policy.
        </p>
      </section>
      <section>
        <h2>Reviews, photographs, and external sites</h2>
        <p>The interactive service-area map loads map images from OpenStreetMap when it enters view. Its provider receives standard connection information such as your IP address and the page referrer. The map does not request your device location. See <a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer">OpenStreetMap Foundation’s privacy policy</a>.</p>
        <p>
          Customer feedback featured on SRL’s social profile is selected by the
          business and is not a complete or independent review feed. Individual
          experiences and project images are not guarantees of results. You
          remain free to share an honest review.
        </p>
        <p>
          Instagram and other external destinations have their own terms,
          privacy practices, and accessibility. If you believe content on this
          website was used without appropriate permission or describes something
          inaccurately, contact SRL at{" "}
          <a href={`tel:${site.phoneTel}`}>{site.phone}</a> and identify the
          page and concern.
        </p>
      </section>
      <section>
        <h2>License and consumer information</h2>
        <p>
          SRL Painting lists California C-33 Painting & Decorating license #
          {site.license}. Verify current status, classification, and the
          licensed business identity directly through{" "}
          <a
            href={site.licenseVerifyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            the Contractors State License Board
          </a>{" "}
          before hiring.
        </p>
        <p>
          Read CSLB’s{" "}
          <a
            href="https://cslb.ca.gov/Consumers/Hire_A_Contractor/Home_Improvement_Contracts/What_Is_A_Contract.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            home improvement contract guidance
          </a>
          . Nothing on this website asks you to waive consumer protections,
          statutory cancellation rights, or rights that cannot lawfully be
          waived.
        </p>
      </section>
      <section>
        <h2>Need help using the site?</h2>
        <p>
          See <Link href="/accessibility">accessibility assistance</Link> for
          alternative ways to contact us and report a website barrier.
        </p>
      </section>
    </InformationPage>
  );
}
