import { site } from "@/lib/site";
import { SrlIcon } from "./srl-icon";
import { ReviewCarousel } from "./review-carousel";

export function ReviewsSection() {
  return (
    <section id="reviews" className="section reviews-section" aria-labelledby="reviews-heading">
      <div className="shell reviews-grid">
        <div>
          <p className="eyebrow">IN OUR CUSTOMERS’ WORDS</p>
          <h2 id="reviews-heading">Good work.<br />Happy homeowners.</h2>
          <p className="reviews-intro">A fresh finish is one thing. Feeling good about the whole experience is another. Explore selected customer feedback from Google and Angi.</p>
          <a className="text-link reviews-all-link" href={site.googleReviews} target="_blank" rel="noopener noreferrer">Read all reviews on Google <SrlIcon name="arrow" /></a>
        </div>
        <div className="review-source-cards">
          <ReviewCarousel />
          <a className="review-source" href={site.instagram} target="_blank" rel="noopener noreferrer">
            <SrlIcon name="instagram" className="review-icon" />
            <span className="eyebrow">FOLLOW THE WORK</span>
            <h3>On the job with SRL <SrlIcon name="arrow" /></h3>
            <p>Project updates, finishing details, and customer feedback selected and shared by SRL Painting.</p>
            <span className="review-source-label">{site.instagramHandle} · Opens Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
