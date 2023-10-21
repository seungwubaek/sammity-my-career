import React from 'react';

import {
  StSpanSectionTitle,
  StH1SectionTitleWrapper,
  StDivSectionContent,
} from '.';

type PropsSectionTitle = React.PropsWithChildren<{
  id?: string;
  hasMarginVertical?: boolean;
}>;

export const SectionTitle: React.FC<PropsSectionTitle> = (props) => {
  const { id, hasMarginVertical = false, children } = props;
  return (
    <StH1SectionTitleWrapper id={id} $hasMarginVertical={hasMarginVertical}>
      <StSpanSectionTitle $underlineWidth={4}>{children}</StSpanSectionTitle>
    </StH1SectionTitleWrapper>
  );
};

export const SectionContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <StDivSectionContent>{children}</StDivSectionContent>;
};
