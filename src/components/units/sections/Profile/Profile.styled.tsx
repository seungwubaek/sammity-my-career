'use client';

import React from 'react';
import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

export const StH2ProfileSubSectionTitle = styled.h2`
  margin: 1.5rem 0 1rem;
  ${generateCssByMedia({
    desktop: css`
      font-size: ${({ theme }) => theme.font.h2Size};
    `,
    tablet: css`
      font-size: ${({ theme }) => theme.font.tabletH2Size};
    `,
    mobile: css`
      font-size: ${({ theme }) => theme.font.mobileH2Size};
    `,
  })}
`;

export const StDivProfileSubSectionContent = styled.div`
  padding: 0 ${({ theme }) => theme.layout.sectionHorizontalPadding}px;
`;
