import Link from "next/link";

import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project">
      <div
        className="project__media"
        style={{
          background: project.image ? undefined : project.gradient,
          backgroundImage: project.image ? `url(${project.image})` : undefined,
        }}
        aria-hidden="true"
      >
        <span className="project__year">{project.year}</span>
      </div>

      <div className="project__body">
        <p className="project__category">{project.category}</p>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__summary">{project.summary}</p>

        <div className="project__foot">
          <span className="project__client">{project.client}</span>
          <Link href="/realisations" className="project__link">
            Voir le cas <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
