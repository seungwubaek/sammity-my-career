'use client';

import React from 'react';
import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

export const StDivGaugeBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 15px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.skillExpGaugeBackground};
  border-radius: 5px;
  overflow: hidden;
`;

export const StDivGauge = styled.div<{ $level: number; $levelColor: string }>`
  width: 100%;
  height: ${({ $level }) => `${$level * 10}%`};
  background-color: ${({ $levelColor }) => $levelColor};
  transition: height 0.5s ease-in-out;
`;
