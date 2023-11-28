import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import clsx from 'clsx';

import headerMenus from '@/data/headerMenu';

import {
  StHeaderWrapper,
  StSectionHeader,
  StLinkHeaderLeft,
  StDivHeaderRight,
  StDivHeaderRightMobile,
} from './Header.styled';
import SiteLogo from '@/components/units/Logo';
import { TocDropdown, LangDropdown, GitHubDropdown } from './Dropdown';
import HeaderRightMenu from './HeaderRightMenu';
import { IoMenuSharp } from 'react-icons/io5';

const Header: React.FC = () => {
  const locale = useLocale() as 'ko' | 'en';

  return (
    <StHeaderWrapper>
      <StSectionHeader>
        <StLinkHeaderLeft href={`/${locale}/me`}>
          <SiteLogo colorScheme="black" />
        </StLinkHeaderLeft>
        <StDivHeaderRight className={clsx('responsive-only-desktop')}>
          <TocDropdown
            tocMenuList={headerMenus.map((menu) => ({
              href: menu.href,
              title: menu.title[locale],
            }))}
          />
          <LangDropdown />
          <GitHubDropdown />
        </StDivHeaderRight>
        <StDivHeaderRightMobile
          className={clsx('responsive-only-tablet-mobile')}
        >
          <HeaderRightMenu>
            <IoMenuSharp size={26} />
          </HeaderRightMenu>
        </StDivHeaderRightMobile>
      </StSectionHeader>
    </StHeaderWrapper>
  );
};

export default Header;
