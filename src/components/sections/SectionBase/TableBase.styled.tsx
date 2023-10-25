'use client';

import React from 'react';
import styled from 'styled-components';

export const StTableBase = styled.table`
  width: 100%;
  tr {
    height: 2rem;
    vertical-align: top;
  }
  th {
    width: 10%;
    min-width: 35px;
    text-align: left;
    font-weight: bold;
  }
  td {
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
