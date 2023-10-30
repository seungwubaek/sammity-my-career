import React from 'react';
import { useTranslations } from 'next-intl';

import { getAssetUrl } from '@/lib/utils/url';

import { StDivCareerCardWrapper } from './Career.styled';
import {
  StSection,
  SectionTitle,
  SectionContent,
} from '@/components/sections/SectionBase';
import CareerCard from './CareerCard';

type PropsSectionCareer = {
  locale?: string;
};

const SectionCareer: React.FC<PropsSectionCareer> = (props) => {
  const { locale = 'ko' } = props;
  const t = useTranslations('');
  const careerCardWidth = 420;
  return (
    <StSection>
      <SectionTitle id="career">{t('Career.title')}</SectionTitle>
      <SectionContent>
        <StDivCareerCardWrapper>
          <CareerCard
            locale={locale}
            careerCardWidth={careerCardWidth}
            representativeColor="#0084C8"
            companyLogoSrc={getAssetUrl('logo_mobigen.png').toString()}
            companyLogoMaxWidth={240}
            companyName={t('Career.Mobigen.name')}
            periodFrom={new Date('2016-10')}
            periodTo={new Date('2021-08')}
            team={t('Career.Mobigen.team')}
            position={t('Career.Mobigen.position')}
            projectArray={[
              t('Career.Mobigen.Projects.1'),
              t('Career.Mobigen.Projects.2'),
              t('Career.Mobigen.Projects.3'),
              t('Career.Mobigen.Projects.4'),
              t('Career.Mobigen.Projects.5'),
              t('Career.Mobigen.Projects.6'),
              t('Career.Mobigen.Projects.7'),
            ]}
          />
          <CareerCard
            locale={locale}
            careerCardWidth={careerCardWidth}
            representativeColor="#2B5DA5"
            companyLogoSrc={getAssetUrl('logo_mosepeople.png').toString()}
            companyLogoMaxWidth={300}
            companyName={t('Career.Mosepeople.name')}
            periodFrom={new Date('2021-09')}
            periodTo={new Date('2023-08')}
            team={t('Career.Mosepeople.team')}
            position={t('Career.Mosepeople.position')}
            projectArray={[
              t('Career.Mosepeople.Projects.1'),
              t('Career.Mosepeople.Projects.2'),
              t('Career.Mosepeople.Projects.3'),
              t('Career.Mosepeople.Projects.4'),
              t('Career.Mosepeople.Projects.5'),
            ]}
          />
        </StDivCareerCardWrapper>
      </SectionContent>
    </StSection>
  );
};

export default SectionCareer;
