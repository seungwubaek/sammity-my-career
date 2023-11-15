'use client';

import React from 'react';
import styled from 'styled-components';

import { StTableBase } from '@/components/sections/SectionBase/TableBase.styled';

export const StPortfolioTable = styled(StTableBase)`
  td.external-link-header {
    font-weight: bold;
    padding: 0.5rem 0;
    text-align: center;
    a {
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
