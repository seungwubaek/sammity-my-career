import { notFound } from 'next/navigation';
import { createTranslator } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import type { Metadata, ResolvingMetadata } from 'next';

import Initializers from '@/lib/initializers';
import GlobalStyles from '@/styles/GlobalStyles.styled';
import { Noto_Sans_KR, Roboto_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@/lib/scripts';
import { localeMap } from '@/intl-navigation';
import { getAssetUrl } from '@/lib/utils/url';

import Header from '@/components/sections/Header';
import ToTop from '@/components/units/ToTop';
import { Suspense } from 'react';
import Loading from './loading';
import clsx from 'clsx';

type PropsMetadata = {
  params: {
    locale: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

const notoSansKr = Noto_Sans_KR({
  subsets: [],
  variable: '--noto-sans-kr',
  fallback: ['system-ui', 'arial'],
});

const robotoMono = Roboto_Mono({
  subsets: [],
  variable: '--roboto-mono',
  fallback: ['--noto-sans-kr', 'system-ui', 'arial'],
});

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

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
export async function generateMetadata(
  { params: { locale }, searchParams }: PropsMetadata,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const messages = await getMessages(locale);

  const t = createTranslator({ locale, messages });

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${t('Meta.title')}`,
    description: t('Meta.description'),
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? '/'),
    authors: [{ name: 'Sammy Baek', url: 'https://seungwebaek.github.io' }],
    openGraph: {
      title: `${t('Meta.title')}`,
      description: t('Meta.description'),
      type: 'website',
      locale: localeMap[locale],
      url: new URL('/', process.env.NEXT_PUBLIC_BASE_URL ?? '/'),
      siteName: t('Meta.title'),
      images: [
        {
          url: `${getAssetUrl('my-hero-image.png')}`,
          width: 768, // 1.92:1
          height: 400,
          alt: 'My Hero Image for share',
        },
        ...previousImages,
      ],
    },
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
      <body className={clsx([notoSansKr.className, robotoMono.variable])}>
        <Initializers locale={locale}>
          <GlobalStyles />
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <ToTop />
          <div id="modal-portal" />
          <div id="toast-portal" />
        </Initializers>
      </body>
      {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
    </html>
  );
}
