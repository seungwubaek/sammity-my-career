'use client';

import React from 'react';
import ReactDOM from 'react-dom';

type PropsPortal = React.PropsWithChildren<{
  selector: string;
}>;

export const Portal: React.FC<PropsPortal> = ({ children, selector }) => {
  const element = document.querySelector(selector);

  return element && children ? ReactDOM.createPortal(children, element) : null;
};
