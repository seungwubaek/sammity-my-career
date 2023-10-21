'use client';

import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

import { StSection } from '@/components/units/sections/SectionBase';

export const StSectionHeroImage = styled(StSection)`
  position: relative;
  width: 100%;

  ${generateCssByMedia(
    css`
      aspect-ratio: 1920 / 648;
    `,
    ['desktop']
  )}

  ${generateCssByMedia(
    css`
      aspect-ratio: 850 / 287.27;
      margin-top: 30px;
    `,
    ['tablet']
  )}

  ${generateCssByMedia(
    css`
      margin-top: ${({ theme }) => theme.layout.headerHeight}px;
      height: 431px;
    `,
    ['mobile']
  )}
`;
