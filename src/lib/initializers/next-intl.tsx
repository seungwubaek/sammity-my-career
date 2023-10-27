import React from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

export type NextIntlClientProviderProps = {
  children: React.ReactNode;
  locale: string;
};

const NextIntlClientProviderWrapper: React.FC<
  NextIntlClientProviderProps
> = async ({ children, locale }) => {
  let messages;
  try {
    messages = (await import(`@/dictionaries/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider
      locale={locale}
      timeZone="Asia/Seoul"
      messages={messages}
    >
      {children}
    </NextIntlClientProvider>
  );
};

export default NextIntlClientProviderWrapper;
