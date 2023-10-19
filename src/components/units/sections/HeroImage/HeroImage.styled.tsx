'use client';

import styled, { css } from 'styled-components';
import { StSection } from '@/components/units/sections/Section';

export const StSectionHeroImage = styled(StSection)`
  position: relative;
  width: 100%;

  ${({ theme }) => css`
    @media (min-width: ${theme.media.tabletMinWidth}px) {
      aspect-ratio: 1920 / 648;
    }

    // prettier-ignore
    @media (min-width: ${theme.media.tabletMinWidth}px) and
            (max-width: ${theme.media.tabletMaxWidth}px) {
      aspect-ratio: 850 / 287.27;
      margin-top: 30px;
    }

    @media (max-width: ${theme.media.mobileMaxWidth}px) {
      margin-top: ${theme.layout.headerHeight}px;
      height: 431px;
    }
  `}
`;
