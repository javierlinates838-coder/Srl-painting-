import { site } from "@/lib/site";
import { SrlIcon } from "./srl-icon";
import { ReviewCarousel } from "./review-carousel";

export function ReviewsSection() {
  return (
    <section id="reviews" className="section reviews-section" aria-labelledby="reviews-heading">
      <div className="shell reviews-grid">
        <div data-reveal>
          <p className="kicker">Reviews</p>
          <h2 id="reviews-heading">Don’t take<br /><span className="red">our word for it.</span></h2>
          <p className="reviews-intro">A fresh finish is one thing. Feeling good about the whole experience is another. Here’s what customers say on Google and Angi.</p>
          <div className="review-links">
            <a className="button primary" href={site.googleReviews} target="_blank" rel="noopener noreferrer">Read Google reviews <SrlIcon name="arrow" /></a>
            <a className="text-link" href={site.instagram} target="_blank" rel="noopener noreferrer"><SrlIcon name="instagram" /> More on Instagram</a>
          </div>
        </div>
        <div data-reveal>
          <ReviewCarousel />
        </div>
      </div>
    </section>
  );
}
