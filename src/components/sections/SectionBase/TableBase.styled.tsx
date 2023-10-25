'use client';

import React from 'react';
import styled, { css } from 'styled-components';

export const StCSSTable = css`
  width: 100%;
  tr {
    vertical-align: top;
  }
  th {
    padding: 5px 0;
    width: 10%;
    min-width: 35px;
    text-align: left;
    font-weight: bold;
  }
  td {
    padding: 5px 0;
    padding-left: 1rem;
    &.replaceTh {
      padding-left: 0;
      font-weight: bold;
    }
    &.wide {
      padding: 0;
      margin: 0;
      width: 100%;
    }
  }
`;

export const StTableBase = styled.table`
  // CSS만 재사용하고 props를 받을 수 있는 inherit table을 구현할 수 있도록 처리
  ${StCSSTable}
`;
