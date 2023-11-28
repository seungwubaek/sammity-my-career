'use client';

import React from 'react';
import styled from 'styled-components';

import { StCSSSection, StSection } from '@/components/sections/SectionBase';

export const StSectionFooter = styled(StSection)`
  background-color: ${({ theme }) => theme.color.darkBackground};
  font-size: ${({ theme }) => theme.font.footerFontSize};
  padding-bottom: 20px;
`;

export const StDivFooterInner = styled.div`
  ${StCSSSection}
  display: flex;
  flex-direction: column;
  padding: 2rem ${({ theme }) => theme.layout.sectionHorizontalPadding}px 0;
  gap: 10px;
  color: #fff;
`;

export const StSectionFooterLogoAndLinkSet = styled.section`
  display: flex;
  justify-content: flex-start;
  margin-left: 6px;
`;

export const StUlPersonalInfo = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;
  margin-left: 6px;

  li {
    margin-right: 3rem;
    margin-bottom: 0.5rem;
  }
`;
