import type { Metadata } from 'next';

import '@/styles/globals.scss';
import { Noto_Sans_KR } from 'next/font/google';

import Header from '@/components/units/Header';
import Providers from '@/lib/providers';

const notoSansKr = Noto_Sans_KR({ subsets: [] });

export const metadata: Metadata = {
  title: 'Seungwu Baek',
  description: 'Career Page of Seungwu Baek, a computer engineer.',
};

export function generateStaticParams() {
  return [{ locale: 'ko' }, { locale: 'en' }];
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
