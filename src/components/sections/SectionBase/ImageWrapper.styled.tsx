'use client';

import React from 'react';
import styled, { css } from 'styled-components';

export const StCSSImageWrapper = css`
  position: relative;
  // aspect-ratio: x? / y?;
  // max-width: ?px;
  // width: 100%;
  // height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const StDivImageWrapperBase = styled.div`
  ${StCSSImageWrapper}
`;
