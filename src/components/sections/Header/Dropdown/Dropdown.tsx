'use client';

import React from 'react';
import styled from 'styled-components';

type DropdownProps = {
  dropdownBtn: React.ReactNode;
  menuComponentList: React.ReactNode[];
  dropdownAlign?: 'left' | 'center' | 'right';
};

const StDivDropdownBtnWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;
`;

const StUlDropdownMenu = styled.ul<{
  $show: boolean;
  $dropdownAlign: DropdownProps['dropdownAlign'];
}>`
  position: absolute;
  top: ${({ theme }) => theme.layout.headerHeight}px;
  ${({ $dropdownAlign }) => {
    switch ($dropdownAlign) {
      case 'left':
        return 'left: 0;';
      case 'center':
        return 'left: 50%; transform: translateX(-50%);';
      case 'right':
        return 'right: 0;';
      default:
        return 'right: 0;';
    }
  }}
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
  // Usage:
  //   menuComponentList는 li 태그로 감싸져야 함

  const { dropdownBtn, menuComponentList, dropdownAlign } = props;

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
      <StUlDropdownMenu $show={isMenuOpen} $dropdownAlign={dropdownAlign}>
        {menuComponentList}
      </StUlDropdownMenu>
    </StDivDropdownBtnWrapper>
  );
};

export default Dropdown;
