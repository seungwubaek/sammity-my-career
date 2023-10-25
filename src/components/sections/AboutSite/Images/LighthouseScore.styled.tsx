'use client';

import React from 'react';
import styled from 'styled-components';

import { StDivImageWrapperBase } from '@/components/sections/SectionBase/ImageWrapper.styled';

export const StDivImageWrapper = styled(StDivImageWrapperBase)`
  position: relative;
  aspect-ratio: 487 / 283;
  max-width: 450px;
  width: 100%;
  height: auto;
  margin: 20px auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
