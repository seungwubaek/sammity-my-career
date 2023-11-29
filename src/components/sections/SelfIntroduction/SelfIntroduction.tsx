import React from 'react';
import { useTranslations } from 'next-intl';

import { getAssetUrl } from '@/lib/utils/url';

import {
  SectionContent,
  SectionTitle,
  StSection,
} from '@/components/sections/SectionBase';
import { StDivSpeechCardContainer } from './SelfIntroduction.styled';
import IntroductionHeroImage from './IntroductionHeroImage/IntroductionHeroImage';
import SpeechCards from './SpeechCards';

type PropsSectionIntroduction = {
  locale: string;
};

const SectionSelfIntroduction: React.FC<PropsSectionIntroduction> = (props) => {
  const { locale } = props;

  const t = useTranslations();

  return (
    <StSection $wide>
      <StSection>
        <SectionTitle id="self-introduction">
          {t('SelfIntroduction.title')}
        </SectionTitle>
      </StSection>
      <StSection $wide={true}>
        <IntroductionHeroImage
          imageSrc={getAssetUrl('introduction_hero.jpg').toString()}
        />
      </StSection>
      <StSection>
        <SectionContent>
          <StDivSpeechCardContainer>
            <SpeechCards locale={locale} />
          </StDivSpeechCardContainer>
        </SectionContent>
      </StSection>
    </StSection>
  );
};

export default SectionSelfIntroduction;
