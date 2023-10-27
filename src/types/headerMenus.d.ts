import { locales } from './next-intl';

export type headerMenu = {
  title: {
    [locale in locales]: string;
  };
  href: string;
};
