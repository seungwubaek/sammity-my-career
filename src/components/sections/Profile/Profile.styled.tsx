'use client';

import React from 'react';
import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

import { StSection } from '@/components/sections/SectionBase';

export const StSectionProfileSubSection = styled(StSection)`
  ${generateCssByMedia(
    css`
      margin: 0;
      padding: 0;
    `,
    ['tablet', 'mobile']
  )}
`;

export const StH2ProfileSubSectionTitle = styled.h2`
  margin: 1.5rem 0 1rem;
  ${generateCssByMedia(
    css`
      font-size: ${({ theme }) => theme.font.h2Size};
    `,
    ['desktop']
  )}

  ${generateCssByMedia(
    css`
      font-size: ${({ theme }) => theme.font.tabletH2Size};
    `,
    ['tablet']
  )}

  ${generateCssByMedia(
    css`
      font-size: ${({ theme }) => theme.font.mobileH2Size};
    `,
    ['mobile']
  )}
`;

export const StDivProfileSubSectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 ${({ theme }) => theme.layout.sectionHorizontalPadding}px;

  ${generateCssByMedia(
    css`
      padding: 0;
    `,
    ['tablet', 'mobile']
  )}
`;

export const StTablePersonalInfo = styled.table`
  th {
    padding: 0.5rem 0;
    vertical-align: top;

    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    // 양측정렬
    // Ref: https://stackoverflow.com/questions/11589590/text-align-justify-inline-block-elements-properly
    // & > div {
    //   text-align: justify;
    //   &:before {
    //     content: '';
    //     display: block;
    //     width: 100%;
    //     margin-bottom: 1rem; /* your line-height */
    //   }
    //   &:after {
    //     content: '';
    //     display: inline-block;
    //     width: 100%;
    //   }
    // }
  }

  td {
    vertical-align: top;
    padding: 0.5rem 1rem 0.5rem 1rem;
  }

  ${generateCssByMedia(
    css`
      width: 60%;
      min-width: 550px;
      th {
        width: 23%;
        div {
          padding-left: 1.5rem;
        }
      }
    `,
    ['desktop']
  )}

  ${generateCssByMedia(
    css`
      width: 100%;
      th {
        width: 140px;
        div {
          padding-left: 2rem;
        }
      }
    `,
    ['tablet']
  )}

  ${generateCssByMedia(
    css`
      width: 100%;
      th {
        width: 100px;
        div {
          padding-left: 1rem;
        }
      }
    `,
    ['mobile']
  )}
`;

export const StTableContactInfo = styled(StTablePersonalInfo)``;

export const StTableLinkList = styled(StTablePersonalInfo)`
  th {
    width: 0;
  }
  td {
    padding-left: 0;
    padding-right: 0;
  }
`;
