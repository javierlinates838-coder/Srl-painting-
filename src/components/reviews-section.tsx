import { site } from "@/lib/site";
import { SrlIcon } from "./srl-icon";

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="section reviews-section"
      aria-labelledby="reviews-heading"
    >
      <div className="shell reviews-grid">
        <div>
          <p className="eyebrow">IN OUR CUSTOMERS’ WORDS</p>
          <h2 id="reviews-heading">
            Good work.
            <br />
            Honest feedback.
          </h2>
          <p className="reviews-intro">
            Choosing a painter is personal. Read customer experiences on Google,
            explore our latest work on Instagram, and ask the questions that
            matter to your project.
          </p>
          <p className="review-disclosure">
            Reviews are hosted by Google; this website does not calculate a
            rating or reproduce a review feed. Individual experiences are not
            guarantees of future results.
          </p>
        </div>
        <div className="review-source-cards">
          <a
            className="review-source"
            href={site.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SrlIcon name="message" className="review-icon" />
            <span className="eyebrow">GOOGLE REVIEWS</span>
            <h3>
              Hear from our customers <SrlIcon name="arrow" />
            </h3>
            <p>
              Read reviews on the SRL Painting Google listing. Worked with us?
              You can share your honest experience there, too.
            </p>
            <span className="review-source-label">
              Read or leave a review · Opens Google Maps
            </span>
          </a>
          <a
            className="review-source"
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SrlIcon name="instagram" className="review-icon" />
            <span className="eyebrow">FOLLOW THE WORK</span>
            <h3>
              On the job with SRL <SrlIcon name="arrow" />
            </h3>
            <p>
              Project updates, finishing details, and customer feedback selected
              and shared by SRL Painting.
            </p>
            <span className="review-source-label">
              {site.instagramHandle} · Opens Instagram
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
