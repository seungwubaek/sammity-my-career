// Guide for next-intl v3.0.0-rc.4 for server components
// https://next-intl-docs.vercel.app/docs/getting-started/app-router-server-components
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`@/dictionaries/${locale}.json`)).default,
}));
