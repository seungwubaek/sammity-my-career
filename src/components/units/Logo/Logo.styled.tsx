'use client';

import React from 'react';
import styled from 'styled-components';

export const StDivLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StSpanLogoSub = styled.span`
  font-size: ${({ theme }) => theme.font.headerLogoSubTitleSize};
  font-weight: bold;
  margin-left: 5px;
  padding-bottom: 3px;
`;
