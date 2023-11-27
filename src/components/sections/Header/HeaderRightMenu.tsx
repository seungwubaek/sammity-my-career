'use client';

import React, { type PropsWithChildren } from 'react';
import { useLocale } from 'next-intl';

import headerMenus from '@/data/headerMenu';
import { localesLabels } from '@/intl-navigation';
import { siteInfo } from '@/data/commonInfo';

import {
  StDivDropdown,
  StDivDropdownMenuItem,
  StLinkDropdownMenuItem,
  StUlDropdownMenu,
} from './HeaderRightMenu.styled';
import {
  IoLogoGithub,
  IoOpenOutline,
  IoLanguageOutline,
} from 'react-icons/io5';
import { useModalPortal } from '@/components/units/Portal';
import LangSelectModal from '@/components/modals/LangSelectModal';

const HeaderRightMenu: React.FC<PropsWithChildren> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const locale = useLocale() as 'ko' | 'en';
  const { openModal } = useModalPortal();

  return (
    <>
      <StDivDropdown onClick={() => setIsMenuOpen((prev) => !prev)}>
        {children}
      </StDivDropdown>
      <StUlDropdownMenu $visible={isMenuOpen}>
        {headerMenus.map((menu) => (
          <StLinkDropdownMenuItem
            href={menu.href}
            key={menu.href}
            onClick={() => setIsMenuOpen(false)}
          >
            <li>{menu.title[locale]}</li>
          </StLinkDropdownMenuItem>
        ))}
        <StDivDropdownMenuItem
          onClick={() => {
            setIsMenuOpen(false);
            openModal({
              modalTitle: 'Select Language',
              modalContent: <LangSelectModal />,
            });
          }}
        >
          <li>
            <IoLanguageOutline className="icon" size={20} />
            {localesLabels.title}
          </li>
        </StDivDropdownMenuItem>
        <StLinkDropdownMenuItem
          href={siteInfo.githubUrl}
          key={siteInfo.githubUrl}
          target="_blank"
        >
          <li>
            <IoLogoGithub className="icon" size={20} />
            View on GitHub&nbsp;
            <IoOpenOutline size={15} />
          </li>
        </StLinkDropdownMenuItem>
      </StUlDropdownMenu>
    </>
  );
};

export default HeaderRightMenu;
