'use client';

import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

import { StSection } from '@/components/units/sections/Section';

export const StSectionHeroImage = styled(StSection)`
  position: relative;
  width: 100%;

  ${generateCssByMedia({
    desktop: css`
      aspect-ratio: 1920 / 648;
    `,
    tablet: css`
      aspect-ratio: 850 / 287.27;
      margin-top: 30px;
    `,

    mobile: css`
      margin-top: ${({ theme }) => theme.layout.headerHeight}px;
      height: 431px;
    `,
  })}
`;
