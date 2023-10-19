'use client';

import React from 'react';
import styled, { css } from 'styled-components';

export const StSection = styled.section<{ $wide?: boolean }>`
  display: block;
  width: ${({ theme }) => theme.media.desktopMinWidth}px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.sectionHorizontalPadding}px;
  ${({ $wide }) =>
    $wide &&
    css`
      width: 100%;
      padding: 0;
      margin: 0;
    `}
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
