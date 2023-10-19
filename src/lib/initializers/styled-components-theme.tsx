'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@/styles/theme';

const StyledComponentThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledComponentThemeProvider;
