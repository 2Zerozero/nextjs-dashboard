import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Next.js 앱에 PPR을 활성화
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;
