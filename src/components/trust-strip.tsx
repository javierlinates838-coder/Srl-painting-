import { credentials, site } from "@/lib/site";
import { IosGroup, IosRow } from "./ios-group";

export function TrustStrip() {
  return (
    <div className="container-main pb-2">
      <p className="ios-section-header">Credentials</p>
      <IosGroup>
        {credentials.map((c) => (
          <IosRow
            key={c.label}
            href={c.label === "State license" ? site.licenseVerifyUrl : undefined}
            chevron={c.label === "State license"}
          >
            <span className="ios-row-content flex items-center justify-between gap-4">
              <span className="ios-body">{c.label}</span>
              <span className="ios-subhead">{c.value}</span>
            </span>
          </IosRow>
        ))}
      </IosGroup>
    </div>
  );
}
