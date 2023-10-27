import React from 'react';

import { StDivSectionContent } from '.';

export const SectionContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <StDivSectionContent>{children}</StDivSectionContent>;
};
