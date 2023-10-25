'use client';

import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

import { StSection } from '@/components/sections/SectionBase';

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

export const StDivHeroImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1920 / 648;
  width: 100%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const StDivMobileHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 431px;
`;

export const StDivMobileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 200px;
  height: 200px;
  border-radius: 200px;
  background-color: #828282;
  overflow: hidden;
`;

export const StDivMobileTitle = styled.div`
  margin: 40px 0;
`;

export const StDivMobileTitleMain = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.1;
`;

export const StDivMobileName = styled.div`
  padding: 8px 15px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  background-color: #222222;
  border-radius: 15px;
  color: #ffffff;
`;
