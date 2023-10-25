'use client';

import React from 'react';
import styled from 'styled-components';

export const StUlBase = styled.ul`
  padding-left: 1rem;
  li {
    position: relative;
    list-style: none;
    &::after {
      position: absolute;
      content: '•';
      top: 0;
      left: -0.8rem;
    }
  }
`;
