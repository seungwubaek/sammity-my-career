'use client';

import React from 'react';
import {
  ModalPortalProvider,
  ToastPortalProvider,
} from '@/components/units/Portal';

const PortalProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ToastPortalProvider>
      <ModalPortalProvider>{children}</ModalPortalProvider>
    </ToastPortalProvider>
  );
};

export default PortalProvider;
