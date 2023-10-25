'use client';

import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

import { StDivImageWrapperBase } from '../SectionBase/ImageWrapper.styled';

export const StDivProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${generateCssByMedia(
    css`
      position: absolute;
      top: 0;
      right: 0;
      width: 40%;
    `,
    ['desktop']
  )}

  ${generateCssByMedia(
    css`
      position: relative;
      width: 100%;
      padding: 2rem;
    `,
    ['tablet', 'mobile']
  )}
`;

export const StDivImageWrapper = styled(StDivImageWrapperBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  border-radius: 15px;
  overflow: hidden;
  max-width: 450px;
  width: 100%;
  height: auto;
`;
