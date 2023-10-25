'use client';

import React, { type PropsWithChildren } from 'react';
import { useTranslations } from 'next-intl';

import {
  StDivDropdown,
  StDivDropdownMenuItem,
  StLinkDropdownMenuItem,
  StUlDropdownMenu,
} from './HeaderRightMenu.styled';

const HeaderRightMenu: React.FC<PropsWithChildren> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const t = useTranslations('Header');

  return (
    <>
      <StDivDropdown onClick={() => setIsMenuOpen((prev) => !prev)}>
        {children}
      </StDivDropdown>
      <StUlDropdownMenu $visible={isMenuOpen}>
        <StLinkDropdownMenuItem
          href="#projects"
          onClick={() => setIsMenuOpen(false)}
        >
          <li>Projects</li>
        </StLinkDropdownMenuItem>
        <StLinkDropdownMenuItem
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
        >
          <li>Contact</li>
        </StLinkDropdownMenuItem>
        <StDivDropdownMenuItem>
          <li>{t('lang')}</li>
        </StDivDropdownMenuItem>
      </StUlDropdownMenu>
    </>
  );
};

export default HeaderRightMenu;
