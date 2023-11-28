'use client';

import React from 'react';
import {
  useRouter,
  usePathname,
  localesLabels,
  locales,
} from '@/intl-navigation';
import { useTheme } from 'styled-components';

import Dropdown from '.';
import { IoLanguageOutline } from 'react-icons/io5';

const LangDropdown: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();

  return (
    <Dropdown
      dropdownBtn={<IoLanguageOutline size={theme.layout.headerIconSize} />}
      menuComponentList={locales.map((locale) => (
        <li
          key={locale}
          onClick={() => {
            router.replace(pathname, { scroll: false, locale });
          }}
        >
          <div>{localesLabels[locale]}</div>
        </li>
      ))}
      dropdownAlign="center"
    />
  );
};

export default LangDropdown;
