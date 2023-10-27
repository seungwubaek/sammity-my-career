'use client';

import React from 'react';
import styled from 'styled-components';

export const StUlLangMenu = styled.ul`
  list-style: none;
`;

export const StLiLangMenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-width: 100px;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: solid 1px ${({ theme }) => theme.color.lightBorder};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.listHovered};
  }
`;
