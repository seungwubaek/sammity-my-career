import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { useTheme } from 'styled-components';

const useAllMediaQuery = () => {
  const theme = useTheme();

  // TODO: 각 useMediaQuery는 async 하게 작동하며, state의 변경을 트리거하므로 본 hook은 최대 3번의 렌더링을 발생시킨다.
  // useMediaQuery가 가진 다양한 옵션(orientation, device type 등)의 활용 가능성을 염두에 두고 사용하고 있으나,
  // 당장은 옵션들이 필요치 않기 때문에, 1번의 렌더링만 필요로하는 custom hook을 제작하는 것을 고려해보자.
  const isDesktop = useMediaQuery({
    query: `(min-width: ${theme.media.desktopMinWidth}px)`,
  });
  const isTablet = useMediaQuery({
    query: `(min-width: ${theme.media.tabletMinWidth}px) and (max-width: ${theme.media.tabletMaxWidth}px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.media.mobileMaxWidth}px)`,
  });

  return { isDesktop, isTablet, isMobile };
};

export default useAllMediaQuery;
