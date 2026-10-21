import type { ReactNode } from "react";

import type { Service } from "@/lib/services";

type Props = {
  name: Service["icon"];
  size?: number;
};

const paths: Record<Service["icon"], ReactNode> = {
  strategy: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>
  ),
  design: (
    <>
      <path d="M12 3l2.4 5.1L20 9.2l-4 3.9.9 5.6-4.9-2.7-4.9 2.7.9-5.6-4-3.9 5.6-1.1z" />
    </>
  ),
  content: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M10 9.5l5 2.5-5 2.5z" />
    </>
  ),
  media: (
    <>
      <path d="M4 5h9a3 3 0 013 3v8a3 3 0 01-3 3H4z" />
      <path d="M16 9l4-2v10l-4-2" />
    </>
  ),
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </>
  ),
  growth: (
    <>
      <path d="M4 19V5M4 19h16" />
      <path d="M8 15l4-5 3 3 5-6" />
    </>
  ),
};

export default function ServiceIcon({ name, size = 22 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
