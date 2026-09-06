import { businessCredentials, site } from "@/lib/site";

export function TrustSection() {
  return (
    <section className="credentials" aria-labelledby="credentials-heading">
      <div className="container-main credentials-inner">
        <div className="credentials-intro">
          <p className="credentials-eyebrow">{site.name}</p>
          <h2 id="credentials-heading" className="credentials-heading">
            Professional details.
          </h2>
          <p className="credentials-region">{site.tagline}</p>
        </div>

        <dl className="credentials-rail">
          {businessCredentials.map((item) => (
            <div key={item.id} className="credentials-item">
              <dt className="credentials-key">{item.label}</dt>
              <dd className="credentials-value">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
