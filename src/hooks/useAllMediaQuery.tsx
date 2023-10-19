import React from 'react';
import { useMediaQuery } from 'react-responsive';

import variables from '@/styles/variables.module.scss';

const useAllMediaQuery = () => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${variables.desktopMinWidth})`,
  });
  const isTablet = useMediaQuery({
    query: `(min-width: ${variables.tabletMinWidth}) and (max-width: ${variables.tabletMaxWidth})`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${variables.mobileMaxWidth})`,
  });

  return { isDesktop, isTablet, isMobile };
};

export default useAllMediaQuery;
