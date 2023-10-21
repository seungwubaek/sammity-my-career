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

export const StH1SectionTitleWrapper = styled.h1<{
  $hasMarginVertical?: boolean;
}>`
  position: relative;
  font-weight: 700;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  margin-bottom: 0.5rem;

  ${({ $hasMarginVertical }) =>
    $hasMarginVertical &&
    css`
      margin: 1rem 0;
    `}

  ${generateCssByMedia(
    css`
      font-size: ${({ theme }) => theme.font.h1Size};
    `,
    ['desktop']
  )}

  ${generateCssByMedia(
    css`
      font-size: ${({ theme }) => theme.font.tabletH1Size};
    `,
    ['tablet']
  )}

  ${generateCssByMedia(
    css`
      font-size: ${({ theme }) => theme.font.mobileH1Size};
    `,
    ['mobile']
  )}
`;

export const StSpanSectionTitle = styled.span<{ $underlineWidth: number }>`
  position: relative;
  // g, j, p, q, y 와 같이 baseline 아래로 내려가는 글자 처리
  // - after의 height 만큼 보정
  padding-bottom: ${({ $underlineWidth: underlineWidth }) =>
    `${underlineWidth}px`};
  bottom: ${({ $underlineWidth: underlineWidth }) => `${underlineWidth / 2}px`};
  &::after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${({ $underlineWidth: underlineWidth }) => `${underlineWidth}px`};
    background-color: ${({ theme }) => theme.color.secondary};
    content: '';
  }
`;

export const StDivSectionContent = styled.div``;
