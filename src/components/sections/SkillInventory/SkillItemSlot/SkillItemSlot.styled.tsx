'use client';

import React from 'react';
import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

export const StDivSkillItemSlot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.color.border};

  ${generateCssByMedia(
    css`
      height: ${({ theme }) => theme.layout.skillSlotHeight}px;
      font-size: 0.85rem;
    `,
    ['desktop']
  )}

  ${generateCssByMedia(
    css`
      height: ${({ theme }) => theme.layout.skillSlotHeight}px;
      font-size: 0.9rem;
    `,
    ['tablet']
  )}

  ${generateCssByMedia(
    css`
      height: ${({ theme }) => theme.layout.skillSlotHeight}px;
      font-size: 0.85rem;
    `,
    ['mobile']
  )}
`;

export const StDivSkillNameWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  div.skill-logo-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    overflow: hidden;

    ${generateCssByMedia(
      css`
        width: 25px;
        height: 25px;
        margin-right: 0.5rem;
      `,
      ['desktop', 'tablet']
    )}

    ${generateCssByMedia(
      css`
        width: 20px;
        height: 20px;
        margin-right: 0.5rem;
      `,
      ['mobile']
    )}

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }

    &.square-border {
      border-radius: 0;
    }
  }
`;
