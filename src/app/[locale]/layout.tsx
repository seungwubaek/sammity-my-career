import { notFound } from 'next/navigation';
import { createTranslator } from 'next-intl';

import '@/styles/globals.scss';
import { Noto_Sans_KR } from 'next/font/google';

import Header from '@/components/units/Header';
import Providers from '@/lib/providers';

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
  return (
    <html lang={locale}>
      <body className={notoSansKr.className}>
        <Providers locale={locale}>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
