import React from 'react';

import {
  SectionContent,
  SectionTitle,
  StSection,
} from '@/components/sections/SectionBase';

import { MdxKo, MdxEn } from '@/data/aboutSite';

type PropsSectionAboutSite = {
  locale: string;
};

const SectionAboutSite: React.FC<PropsSectionAboutSite> = (props) => {
  const { locale } = props;

  // TODO: 이렇게 복잡한 구조라면 mdx를 사용하는 것이 좋을 것 같다. 지금은 시간이 없지만 나중엔 수정할 수 있기를...
  return (
    <StSection>
      <SectionTitle id="about-site">About Site</SectionTitle>
      <SectionContent>
        {locale === 'ko' ? <MdxKo /> : locale === 'en' ? <MdxEn /> : <MdxEn />}
      </SectionContent>
    </StSection>
  );
};

export default SectionAboutSite;
