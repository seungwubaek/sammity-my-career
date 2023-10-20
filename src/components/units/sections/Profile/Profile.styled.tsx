'use client';

import React from 'react';
import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

import { StSection } from '@/components/units/sections/Section';

export const StSectionProfileSubSection = styled(StSection)`
  ${generateCssByMedia({
    mobile: css`
      margin: 0;
      padding: 0;
    `,
  })}
`;

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

export const StTablePersonalInfo = styled.table`
  ${generateCssByMedia({
    desktop: css`
      width: 50%;
      line-height: 1;
      th {
        width: 25%;
        padding: 0.5rem 1rem;
        & > div {
          text-align: justify;
          &:before {
            content: '';
            display: block;
            width: 100%;
            margin-bottom: 1rem; /* your line-height */
          }
          &:after {
            content: '';
            display: inline-block;
            width: 100%;
          }
        }
      }
      td {
        padding: 0.5rem 1rem 0.5rem 1rem;
      }
    `,
    tablet: css``,
    mobile: css`
      width: 100%;
    `,
  })}
`;
