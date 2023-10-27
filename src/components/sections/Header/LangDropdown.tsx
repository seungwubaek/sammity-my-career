'use client';

import React from 'react';
import {
  useRouter,
  usePathname,
  localesLabels,
  locales,
} from '@/intl-navigation';
import styled from 'styled-components';

import { IoLanguageOutline } from 'react-icons/io5';

const StDivDropdownBtnWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  right: -10px;
  cursor: pointer;
`;

const StUlDropdownMenu = styled.ul<{
  $show: boolean;
}>`
  position: absolute;
  top: ${({ theme }) => theme.layout.headerHeight}px;
  right: 0;
  ${({ $show }) => ($show ? 'display: block;' : 'display: none;')}
  min-width: 120px;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.style.dropdownShadow};
  border-radius: 20px;
  list-style: none;
  overflow: hidden;
  li {
    padding: 10px 20px;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.color.listHovered};
    }
    & > span {
    }
  }
`;

const LangDropdown: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const showMenu = React.useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const hideMenu = React.useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <StDivDropdownBtnWrapper onMouseEnter={showMenu} onMouseLeave={hideMenu}>
        <IoLanguageOutline size={20} />
      </StDivDropdownBtnWrapper>
      <StUlDropdownMenu
        $show={isMenuOpen}
        onMouseEnter={showMenu}
        onMouseLeave={hideMenu}
      >
        {locales.map((locale) => (
          <li
            key={locale}
            onClick={() => {
              hideMenu();
              router.replace(pathname, { locale });
            }}
          >
            {localesLabels[locale]}
          </li>
        ))}
      </StUlDropdownMenu>
    </>
  );
};

export default LangDropdown;
