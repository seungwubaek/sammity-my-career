'use client';

import Error from 'next/error';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return <Error statusCode={404} title={t('title')} />;
}
