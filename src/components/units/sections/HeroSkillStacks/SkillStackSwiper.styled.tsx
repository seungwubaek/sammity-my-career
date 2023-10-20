'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

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

  ${generateCssByMedia(
    css`
      width: 60px;
    `,
    ['tablet']
  )}

  ${generateCssByMedia(
    css`
      width: 55px;
    `,
    ['mobile']
  )}
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

  ${generateCssByMedia(
    css`
      font-size: 14px;
    `,
    ['tablet']
  )}

  ${generateCssByMedia(
    css`
      font-size: 12px;
    `,
    ['mobile']
  )}
`;
