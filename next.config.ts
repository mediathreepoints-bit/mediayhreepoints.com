import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Autorise les origines de l'aperçu (Arena / E2B) en développement.
  allowedDevOrigins: ["*.e2b.app", "*.arena.ai", "localhost", "127.0.0.1"],
};

export default nextConfig;
