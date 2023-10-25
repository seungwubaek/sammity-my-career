'use client';

import React from 'react';
import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

export const StDivProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding-top: 1rem;

  ${generateCssByMedia(
    css`
      grid-template-columns: 1fr;
    `,
    ['tablet', 'mobile']
  )};
`;
