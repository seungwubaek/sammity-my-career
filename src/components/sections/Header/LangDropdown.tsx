'use client';

import React from 'react';
import {
  useRouter,
  usePathname,
  localesLabels,
  locales,
} from '@/intl-navigation';

import Dropdown from './Dropdown';
import { IoLanguageOutline } from 'react-icons/io5';

const LangDropdown: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Dropdown
      dropdownBtn={<IoLanguageOutline size={20} />}
      dropdownMenuList={locales.map((locale) => ({
        listKey: locale,
        menuComponent: <div>{localesLabels[locale]}</div>,
        onClick: () => {
          router.replace(pathname, { scroll: false, locale });
        },
      }))}
    />
  );
};

export default LangDropdown;
