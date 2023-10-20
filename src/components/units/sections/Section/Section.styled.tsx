'use client';

import { generateCssByMedia } from '@/lib/helpers/styling';
import React from 'react';
import styled, { css } from 'styled-components';

export const StSection = styled.section<{ $wide?: boolean }>`
  position: relative;
  display: block;
  width: 100%;
  ${({ $wide }) =>
    !$wide
      ? css`
          max-width: ${({ theme }) => theme.media.desktopMinWidth}px;
          margin: 0 auto;
          padding: 0 ${({ theme }) => theme.layout.sectionHorizontalPadding}px;
        `
      : css`
          padding: 0;
          margin: 0;
        `}
`;

export const StH1SectionTitleWrapper = styled.h1`
  position: relative;
  ${generateCssByMedia({
    desktop: css`
      font-size: ${({ theme }) => theme.font.h1Size};
    `,
    tablet: css`
      font-size: ${({ theme }) => theme.font.tabletH1Size};
    `,
    mobile: css`
      font-size: ${({ theme }) => theme.font.mobileH1Size};
    `,
  })}
  font-weight: 700;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  margin-bottom: 0.5rem;
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
