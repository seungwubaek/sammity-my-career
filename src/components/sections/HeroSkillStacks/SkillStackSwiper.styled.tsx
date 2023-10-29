'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

export const StDivSkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StDivSkillLogoWrapper = styled.div<{ $squareBorder?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  border-radius: ${({ $squareBorder }) => ($squareBorder ? 0 : '15px')};
  overflow: hidden;
  width: ${({ theme }) => theme.layout.heroSkillStacksLogoWidth.desktop};

  ${generateCssByMedia(
    css`
      width: ${({ theme }) => theme.layout.heroSkillStacksLogoWidth.tablet};
    `,
    ['tablet']
  )}

  ${generateCssByMedia(
    css`
      width: ${({ theme }) => theme.layout.heroSkillStacksLogoWidth.mobile};
    `,
    ['mobile']
  )}

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
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
