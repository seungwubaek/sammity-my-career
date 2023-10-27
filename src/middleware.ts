// Guide for next-intl v3.0.0-rc.4 for server components
// https://next-intl-docs.vercel.app/docs/getting-started/app-router-server-components
import createMiddleware from 'next-intl/middleware';

// Guide for using hooks in next-intl v3
// https://next-intl-docs-git-feat-next-13-rsc-next-intl.vercel.app/docs/routing/navigation
import { locales } from './intl-navigation';

export default createMiddleware({
  locales,
  defaultLocale: 'ko',
  localePrefix: 'always',
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
