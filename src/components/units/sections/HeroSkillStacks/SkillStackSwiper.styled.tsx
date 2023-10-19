'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import styled, { css } from 'styled-components';
import Image from 'next/image';

export const StSwiper = styled(Swiper)`
  width: 100%;
`;

export const StSwiperSlideSkillCard = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StDivSkillLogoWrapper = styled.div<{ $squareBorder?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  border-radius: ${({ $squareBorder }) => ($squareBorder ? 0 : '15px')};
  overflow: hidden;
  width: 75px;

  // prettier-ignore
  @media (min-width: ${({ theme }) => theme.media.tabletMinWidth}px) and
          (max-width: ${({ theme }) => theme.media.tabletMaxWidth}px) {
    width: 60px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobileMaxWidth}px) {
    width: 55px;
  }
`;

export const StImageSkillLogo = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`;

export const StDivSkillName = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;

  // prettier-ignore
  @media (min-width: ${({ theme }) => theme.media.tabletMinWidth}px) and
        (max-width: ${({ theme }) => theme.media.tabletMaxWidth}px) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobileMaxWidth}px) {
    font-size: 12px;
  }
`;
