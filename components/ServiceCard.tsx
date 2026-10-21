import Link from "next/link";

import ServiceIcon from "@/components/ServiceIcon";
import type { Service } from "@/lib/services";

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <article className="card service-card">
      <div className="service-card__top">
        <span className="service-card__icon">
          <ServiceIcon name={service.icon} />
        </span>
        <span className="card__index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="service-card__baseline">{service.baseline}</p>
      <h3>{service.title}</h3>
      <p className="card__text">{service.description}</p>

      <ul className="tag-list">
        {service.deliverables.slice(0, 3).map((item) => (
          <li className="tag" key={item}>
            {item}
          </li>
        ))}
      </ul>

      <p style={{ marginTop: 24 }}>
        <Link href="/services" className="project__link">
          En savoir plus <span aria-hidden="true">↗</span>
        </Link>
      </p>
    </article>
  );
}
