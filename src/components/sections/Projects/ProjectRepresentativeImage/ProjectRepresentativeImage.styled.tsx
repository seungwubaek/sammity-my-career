'use client';

import React from 'react';
import styled from 'styled-components';

import { StCSSImageWrapper } from '@/components/sections/SectionBase/ImageWrapper.styled';

export const StDivProjectRepresentativeImageWrapper = styled.div<{
  $borderType: 'round' | 'square';
}>`
  ${StCSSImageWrapper}
  width: 100%;
  height: ${({ theme }) => theme.layout.projectCardHeight}px;
  margin-top: 30px;
  ${({ $borderType }) => $borderType === 'round' && `border-radius: 8px;`}

  img {
    max-width: ${({ theme }) => theme.layout.projectCardMaxWidth}px;
    margin: 0 auto;
  }
`;
