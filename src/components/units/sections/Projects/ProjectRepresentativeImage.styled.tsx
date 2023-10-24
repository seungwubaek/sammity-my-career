'use client';

import React from 'react';
import styled from 'styled-components';

export const StDivProjectRepresentativeImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.layout.projectCardHeight}px;

  img {
    object-fit: contain;
    max-width: ${({ theme }) => theme.layout.projectCardMaxWidth}px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`;
