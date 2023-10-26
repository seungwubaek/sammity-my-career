'use client';

import React from 'react';
import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

import { StCSSTable } from '@/components/sections/SectionBase/TableBase.styled';

export const StDivProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 264px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s linear;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);

    .card-btn-wrapper {
      border-radius: 14px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const StDivProjectCardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: calc(1em / 3 * 2); // h2 margin-bottom defined in global style

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

export const StH2ProjectCardTitle = styled.h2`
  margin: 0;
  margin-right: 8px;
`;

export const StDivProjectCardOpenButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;

export const StTableProjectCard = styled.table<{
  $showDetail: boolean;
}>`
  ${StCSSTable}
  display: block; // for table height animation
  margin-top: 30px;
  transition: height 0.2s linear, opacity 0.2s linear;
  opacity: 1;

  ${({ $showDetail }) =>
    !$showDetail &&
    `
      height: 0;
      margin-top: 0;
      opacity: 0;
      transition: height 0.2s linear, opacity 0.2s linear, margin-top 0.2s linear;
  `}
`;
