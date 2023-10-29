import { notFound } from 'next/navigation';
import { createTranslator } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import Initializers from '@/lib/initializers';
import GlobalStyles from '@/styles/GlobalStyles.styled';
import { Noto_Sans_KR } from 'next/font/google';
import { GoogleAnalytics } from '@/lib/scripts';

import Header from '@/components/sections/Header';
import ToTop from '@/components/units/ToTop';
import { Suspense } from 'react';
import Loading from './loading';

const notoSansKr = Noto_Sans_KR({ subsets: [] });

async function getMessages(locale: string) {
  try {
    return (await import(`@/dictionaries/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export function generateStaticParams() {
  return ['ko', 'en'].map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages = await getMessages(locale);

  const t = createTranslator({ locale, messages });

  return {
    title: t('Meta.title'),
    description: t('Meta.description'),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={notoSansKr.className}>
        <Initializers locale={locale}>
          <GlobalStyles />
          <Suspense fallback={<Loading />}>
            <Header />
            {children}
            <ToTop />
            <div id="modal-portal" />
            <div id="toast-portal" />
          </Suspense>
        </Initializers>
      </body>
      {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
    </html>
  );
}
