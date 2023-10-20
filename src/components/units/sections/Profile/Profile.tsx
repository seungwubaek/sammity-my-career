import React from 'react';

import {
  StDivProfileSubSectionContent,
  StH2ProfileSubSectionTitle,
} from './Profile.styled';
import { SectionContent, StSection } from '@/components/units/sections/Section';
import { SectionTitle } from '@/components/units/sections/Section';

const SectionProfile: React.FC = () => {
  return (
    <StSection>
      <SectionTitle>프로필</SectionTitle>
      <SectionContent>
        <StSection>
          <StH2ProfileSubSectionTitle>기본정보</StH2ProfileSubSectionTitle>
          <StDivProfileSubSectionContent>내용</StDivProfileSubSectionContent>
        </StSection>
      </SectionContent>
    </StSection>
  );
};

export default SectionProfile;
