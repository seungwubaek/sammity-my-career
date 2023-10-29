// Guide for using hooks in next-intl v3
// https://next-intl-docs-git-feat-next-13-rsc-next-intl.vercel.app/docs/routing/navigation
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['ko', 'en'] as const;

export const localesLabels = {
  title: 'Language',
  ko: '한국어',
  en: 'English',
};

// export const localeMap: { [key in (typeof locales)[number]]: string } = {
export const localeMap: { [key: string]: string } = {
  ko: 'ko_KR',
  en: 'en_US',
};

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
