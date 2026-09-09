import { site } from "@/lib/site";
import { SrlIcon } from "./srl-icon";

export function ReviewsSection() {
  return (
    <section id="reviews" className="section reviews-section" aria-labelledby="reviews-heading">
      <div className="shell reviews-grid">
        <div>
          <p className="eyebrow">IN OUR CUSTOMERS’ WORDS</p>
          <h2 id="reviews-heading">Good work.<br />Happy homeowners.</h2>
          <p className="reviews-intro">A fresh finish is one thing. Feeling good about the whole experience is another. Here’s what one homeowner shared about working with SRL.</p>
          <a className="text-link reviews-all-link" href={site.googleReviews} target="_blank" rel="noopener noreferrer">Read all reviews on Google <SrlIcon name="arrow" /></a>
        </div>
        <div className="review-source-cards">
          <figure className="testimonial-card">
            <div className="testimonial-top"><span className="testimonial-stars" role="img" aria-label="5 out of 5 stars"><span aria-hidden="true">★★★★★</span></span><span className="eyebrow">CUSTOMER REVIEW</span></div>
            <blockquote>“Steven did an AMAZING job!! My whole house was painted and it looks and feels like a brand new home.”</blockquote>
            <figcaption><span className="review-avatar" aria-hidden="true">MM</span><span><strong>Michael Moreno</strong><small>Google review · shared by SRL on Instagram</small></span></figcaption>
            <div className="testimonial-footer"><span>Featured review excerpt</span><a href={site.googleReviews} target="_blank" rel="noopener noreferrer">Visit Google reviews <SrlIcon name="arrow" /></a></div>
          </figure>
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
