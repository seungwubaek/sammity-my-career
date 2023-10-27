'use client';

import { generateCssByMedia } from '@/lib/helpers/styling';
import React from 'react';
import styled, { css } from 'styled-components';

export const StDivLinkSet = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
  }

  ${generateCssByMedia(
    css`
      gap: 30px;
    `,
    ['desktop']
  )}

  ${generateCssByMedia(
    css`
      gap: 20px;
    `,
    ['tablet', 'mobile']
  )}
`;
