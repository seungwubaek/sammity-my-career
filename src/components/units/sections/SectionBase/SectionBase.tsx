import React from 'react';

import {
  StSpanSectionTitle,
  StH1SectionTitleWrapper,
  StDivSectionContent,
} from '.';

type PropsSectionTitle = React.PropsWithChildren<{ id?: string }>;

export const SectionTitle: React.FC<PropsSectionTitle> = ({ id, children }) => {
  return (
    <StH1SectionTitleWrapper id={id}>
      <StSpanSectionTitle $underlineWidth={4}>{children}</StSpanSectionTitle>
    </StH1SectionTitleWrapper>
  );
};

export const SectionContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <StDivSectionContent>{children}</StDivSectionContent>;
};
