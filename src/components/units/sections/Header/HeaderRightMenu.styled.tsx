import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

export const StDivDropdown = styled.div`
  position: relative;
  cursor: pointer;
`;

export const StUlDropdownMenu = styled.ul<{ $visible: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.layout.headerHeight}px;
  right: 0;
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  list-style: none;
  border: solid 1px ${({ theme }) => theme.color.lightBorder};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

export const StCSSDropdownMenuItem = css`
  display: block;
  &:not(:last-child) {
    border-bottom: solid 1px var.$border-color;
  }
  li {
    padding: 10px 20px;
    margin: 0 10px;
    text-align: center;
  }
`;

export const StLinkDropdownMenuItem = styled(Link)`
  ${StCSSDropdownMenuItem}
`;

export const StDivDropdownMenuItem = styled.div`
  ${StCSSDropdownMenuItem}
`;
