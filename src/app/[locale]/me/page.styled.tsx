'use client';

import styled from 'styled-components';

export const StMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.background};
`;
