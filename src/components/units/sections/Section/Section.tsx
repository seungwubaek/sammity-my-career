import React from 'react';

import {
  StSpanSectionTitle,
  StH1SectionTitleWrapper,
  StDivSectionContent,
} from '.';

export const SectionTitle: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <StH1SectionTitleWrapper>
      <StSpanSectionTitle underlineWidth={4}>{children}</StSpanSectionTitle>
    </StH1SectionTitleWrapper>
  );
};

export const SectionContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <StDivSectionContent>{children}</StDivSectionContent>;
};
