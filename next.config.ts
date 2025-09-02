import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "standalone", // Cloud Run用に必須
}

export default nextConfig
