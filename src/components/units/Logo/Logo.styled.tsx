'use client';

import React from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

export const StDivLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StImageLogo = styled(Image)`
  ${generateCssByMedia(
    css`
      width: 120px;
      height: auto;
    `,
    ['desktop']
  )}

  ${generateCssByMedia(
    css`
      width: 100px;
      height: auto;
    `,
    ['tablet', 'mobile']
  )}
`;

export const StSpanLogoSub = styled.span`
  font-weight: bold;
  margin-left: 5px;
  padding-bottom: 3px;

  ${generateCssByMedia(
    css`
      font-size: ${({ theme }) => theme.font.headerLogoSubTitleSize};
    `,
    ['desktop']
  )}

  ${generateCssByMedia(
    css`
      font-size: ${({ theme }) => theme.font.headerLogoSubTitleSizeMobile};
    `,
    ['tablet', 'mobile']
  )}
`;
