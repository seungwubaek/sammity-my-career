import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

export const StDivDropdown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StUlDropdownMenu = styled.ul<{ $visible: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.layout.headerHeight}px;
  right: 0;
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  list-style: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.style.dropdownShadow};
`;

export const StCSSDropdownMenuItem = css`
  display: block;
  &:not(:last-child) {
    border-bottom: solid 1px ${({ theme }) => theme.color.border};
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    margin: 0 10px;
    text-align: center;
    &.language {
      svg {
        margin-right: 5px;
      }
      cursor: pointer;
    }
  }
`;

export const StLinkDropdownMenuItem = styled(Link)`
  ${StCSSDropdownMenuItem}
`;

export const StDivDropdownMenuItem = styled.div`
  ${StCSSDropdownMenuItem}
`;
