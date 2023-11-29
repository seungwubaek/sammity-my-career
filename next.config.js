// Guide for next-intl v3.0.0-rc.4 for server components
// https://next-intl-docs.vercel.app/docs/getting-started/app-router-server-components
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.ts'
);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // styled-components를 사용할때 SSR의 초기 렌더링에서 생성한 class name과 이후 CSR에서 생성한 class name이 mismatch 되는 문제 해결
    // 기존의 babel compiler를 이용하면 babel-plugin-styled-components으로 해결할 수 있으며,
    // Next.js에서는 babel compiler 대신 SWC를 사용하면서 babel-plugin-styled-components의 내용을 porting 하고 있음
    // Ref:
    // - https://styled-components.com/docs/tooling#server-side-rendering
    // - https://nextjs.org/docs/architecture/nextjs-compiler#styled-components
    styledComponents: true,
  },
  transpilePackages: ['swiper', 'dom7', 'ssr-window'],
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: 'https',
        hostname: 'cdn-sammity-career.s3.ap-northeast-2.amazonaws.com',
        pathname: '/assets/images/**',
      },
    ],
  },
};

module.exports = withBundleAnalyzer(withNextIntl(withMDX(nextConfig)));
