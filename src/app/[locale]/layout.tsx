import { notFound } from 'next/navigation';
import { createTranslator } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import GlobalStyles from '@/styles/GlobalStyles.styled';
import { Noto_Sans_KR } from 'next/font/google';

import Header from '@/components/sections/Header';
import Initializers from '@/lib/initializers';

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
          <Header />
          {children}
        </Initializers>
      </body>
    </html>
  );
}
