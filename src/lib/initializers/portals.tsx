'use client';

import React from 'react';
import { ToastPortalProvider } from '@/components/units/Portal';

const PortalProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ToastPortalProvider>{children}</ToastPortalProvider>;
};

export default PortalProvider;
