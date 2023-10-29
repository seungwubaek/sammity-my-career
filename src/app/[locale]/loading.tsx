'use client';

import React from 'react';
import { FadeLoader } from 'react-spinners';
import styled, { useTheme } from 'styled-components';

const LoadingWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
`;

const Loading: React.FC = () => {
  const theme = useTheme();

  return (
    <LoadingWrapper>
      <FadeLoader
        color={theme.color.loadingSpinner}
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </LoadingWrapper>
  );
};

export default Loading;
