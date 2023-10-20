'use client';

import React from 'react';
import styled from 'styled-components';

import { StCSSSection, StSection } from '@/components/units/sections/Section';

export const StSectionFooter = styled(StSection)`
  background-color: ${({ theme }) => theme.color.darkBackground};
  font-size: ${({ theme }) => theme.font.footerFontSize};
`;

export const StDivFooterInner = styled.div`
  ${StCSSSection}
  padding: 2rem ${({ theme }) => theme.layout.sectionHorizontalPadding}px 1rem;
  color: #fff;
`;

export const StUlPersonalInfo = styled.ul`
  padding: 2rem 1rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
    margin-right: 3rem;
    margin-bottom: 0.5rem;
  }
`;
