'use client';

import React from 'react';
import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

export const StDivCareerCard = styled.div<{
  $representativeColor: string;
  $careerCardWidth: number;
}>`
  padding: 1rem 1.5rem;
  margin: 1rem;
  border: 1px solid
    ${({ $representativeColor }) => $representativeColor ?? 'black'};
  border-left: 8px solid
    ${({ $representativeColor }) => $representativeColor ?? 'black'};

  ${generateCssByMedia(
    css<{ $careerCardWidth: number }>`
      width: ${({ $careerCardWidth }) => $careerCardWidth}px;
    `,
    ['desktop']
  )}

  ${generateCssByMedia(
    css<{ $careerCardWidth: number }>`
      width: 100%;
      max-width: ${({ $careerCardWidth }) => $careerCardWidth}px;
    `,
    ['tablet', 'mobile']
  )}
`;

export const StDivCompanyLogoLocator = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  margin-bottom: 2rem;
`;

export const StDivCompanyLogoWrapper = styled.div<{
  $companyLogoMaxWidth: number;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  max-width: ${({ $companyLogoMaxWidth }) => $companyLogoMaxWidth}px;
  width: 100%;
  height: 100%;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const StDivCompanyName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
