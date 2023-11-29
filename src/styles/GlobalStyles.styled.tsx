'use client';

import { createGlobalStyle, css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

const globalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.color.background};
    font-size: ${({ theme }) => theme.font.fontSize}px;

    ${generateCssByMedia(
      css`
        font-size: ${({ theme }) => theme.font.tabletFontSize}px;
      `,
      ['tablet']
    )}

    ${generateCssByMedia(
      css`
        font-size: ${({ theme }) => theme.font.mobileFontSize}px;
      `,
      ['mobile']
    )}
  };

  div {
    word-break: keep-all;
  }

  a {
    color: inherit;
    text-decoration: none;
    word-break: break-all;

    &.underline {
      text-decoration: underline;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0.6em;  // 3/5=6/15
    margin-bottom: calc(1em / 3 * 2);  // 2/3=10/15
    scroll-margin-top: ${({ theme }) => theme.layout.headerHeight + 10}px;
  }

  h1 {
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
  }

  h2 {
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
  }

  p {
    margin-bottom: 0.6em;
  }

  input {
    outline: none;
    border: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  code {
    font-family: var(--roboto-mono);
    font-size: 0.9em;
    background-color: ${({ theme }) => theme.color.codeBackground};
    padding: 1px 0.25em;
    border-radius: 0.375em;
  }

  .responsive-only-desktop {
    @media (max-width: ${({ theme }) => theme.media.tabletMaxWidth}px) {
      display: none !important;
    }
  }

  .responsive-only-desktop-tablet {
    @media (max-width: ${({ theme }) => theme.media.mobileMaxWidth}px) {
      display: none !important;
    }
  }

  .responsive-only-tablet {
    @media (min-width: ${({ theme }) => theme.media.desktopMinWidth}px),
      (max-width: ${({ theme }) => theme.media.mobileMaxWidth}px) {
      display: none !important;
    }
  }

  .responsive-only-tablet-mobile {
    @media (min-width: ${({ theme }) => theme.media.desktopMinWidth}px) {
      display: none !important;
    }
  }

  .responsive-only-mobile {
    @media (min-width: ${({ theme }) => theme.media.tabletMinWidth}px) {
      display: none !important;
    }
  }

  .unselectable {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  // Section: HeroSkillStacks
  //   Swiper의 호환성 문제로 css module class로 적용 불가한 스타일링
  //   css module class의 name은 hash가 append 되는데 반해,
  //   swiper가 initializing 단계에서 자동으로 생성하는 wrapper class name은 hash가 append 되지 않음
  // TODO: 'linear'로 설정하면 데스크탑 화면 이동 후 돌아왔을때 swiper 애니메이션이 깨짐
  // .swiper-wrapper.skill-card-wrapper {
  //   transition-timing-function: linear !important;
  // }
`;

export default globalStyles;
