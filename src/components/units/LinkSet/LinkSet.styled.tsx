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
      gap: 2rem;
    `,
    ['desktop']
  )}

  ${generateCssByMedia(
    css`
      gap: 1rem;
    `,
    ['tablet']
  )}

  ${generateCssByMedia(
    css`
      gap: 0.7rem;
    `,
    ['mobile']
  )}
`;
