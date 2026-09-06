import type { ServiceId } from "@/lib/site";

type ServiceSurfaceProps = {
  serviceId: ServiceId;
};

export function ServiceSurface({ serviceId }: ServiceSurfaceProps) {
  return (
    <div className="service-surface" data-service={serviceId} aria-hidden>
      <div className="service-surface-frame">
        <div className="service-surface-chamber">
          <span className="service-surface-plane service-surface-plane--primary" />
          <span className="service-surface-plane service-surface-plane--secondary" />
          <span className="service-surface-plane service-surface-plane--tertiary" />
          <span className="service-surface-module" />
          <span className="service-surface-module" />
          <span className="service-surface-module" />
          <span className="service-surface-module" />
        </div>
      </div>
    </div>
  );
}
