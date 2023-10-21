import React from 'react';
import { useTranslations } from 'next-intl';

import { StDivCareerCardWrapper } from './Career.styled';
import {
  StSection,
  SectionTitle,
  SectionContent,
} from '@/components/units/sections/Section';
import CareerCard from './CareerCard';
import { getAssetUrl } from '@/lib/utils/url';

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
            companyLogoSrc={getAssetUrl('logo_mobigen.svg').toString()}
            companyLogoWidth={257}
            companyLogoHeight={94}
            companyLogoStyle={{
              width: '100%',
              maxWidth: '240px',
              height: 'auto',
            }}
            companyName={t('Career.mobigen.name')}
            periodFrom={new Date('2016-10')}
            periodTo={new Date('2021-09')}
            team={t('Career.mobigen.team')}
            position={t('Career.mobigen.position')}
            projectArray={[
              t('Career.mobigen.projects.1'),
              t('Career.mobigen.projects.2'),
              t('Career.mobigen.projects.3'),
              t('Career.mobigen.projects.4'),
              t('Career.mobigen.projects.5'),
              t('Career.mobigen.projects.6'),
            ]}
          />
          <CareerCard
            locale={locale}
            careerCardWidth={careerCardWidth}
            representativeColor="#2B5DA5"
            companyLogoSrc={getAssetUrl('logo_mosepeople.png').toString()}
            companyLogoWidth={224}
            companyLogoHeight={31}
            companyLogoStyle={{
              width: '100%',
              maxWidth: '300px',
              height: 'auto',
            }}
            companyName={t('Career.mosepeople.name')}
            periodFrom={new Date('2021-09')}
            periodTo={new Date('2023-08')}
            team={t('Career.mosepeople.team')}
            position={t('Career.mosepeople.position')}
            projectArray={[
              t('Career.mosepeople.projects.1'),
              t('Career.mosepeople.projects.2'),
              t('Career.mosepeople.projects.3'),
              t('Career.mosepeople.projects.4'),
              t('Career.mosepeople.projects.5'),
            ]}
          />
        </StDivCareerCardWrapper>
      </SectionContent>
    </StSection>
  );
};

export default SectionCareer;
