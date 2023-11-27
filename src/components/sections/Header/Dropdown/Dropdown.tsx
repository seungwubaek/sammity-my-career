'use client';

import React from 'react';
import styled from 'styled-components';

type DropdownProps = {
  dropdownBtn: React.ReactNode;
  dropdownMenuList: {
    listKey: any;
    menuComponent: React.ReactNode;
    onClick?: () => void;
  }[];
};

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
  }
`;

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { dropdownBtn, dropdownMenuList } = props;

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const showMenu = React.useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const hideMenu = React.useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <StDivDropdownBtnWrapper onMouseEnter={showMenu} onMouseLeave={hideMenu}>
      {dropdownBtn}
      <StUlDropdownMenu $show={isMenuOpen}>
        {dropdownMenuList.map((menu) => (
          <li
            key={menu.listKey}
            onClick={() => {
              menu.onClick?.();
              hideMenu();
            }}
          >
            {menu.menuComponent}
          </li>
        ))}
      </StUlDropdownMenu>
    </StDivDropdownBtnWrapper>
  );
};

export default Dropdown;
