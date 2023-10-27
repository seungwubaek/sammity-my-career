'use client';

import React from 'react';
import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

export const StCSSSection = css`
  position: relative;
  display: block;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth}px;
  padding: 0 ${({ theme }) => theme.layout.sectionHorizontalPadding}px;
  margin: 0 auto;
`;

export const StSection = styled.section<{
  $wide?: boolean;
}>`
  ${StCSSSection}

  ${({ $wide }) =>
    $wide &&
    css`
      max-width: none;
      padding: 0;
      margin: 0;
    `}
`;

export const StDivSectionContent = styled.div``;
