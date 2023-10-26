import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { getAboutSiteMessagesFromServer } from '@/lib/helpers/data';
import { getAssetUrl } from '@/lib/utils/url';

import {
  SectionContent,
  SectionTitle,
  StSection,
} from '@/components/sections/SectionBase';
import {
  SiteArchitecture as ImageSiteArchitecture,
  LighthouseScore as ImageLighthouseScore,
  LogoNextjs as ImageLogoNextjs,
} from './Images';

type PropsSectionAboutSite = {
  locale: string;
};

const SectionAboutSite: React.FC<PropsSectionAboutSite> = (props) => {
  const { locale } = props;
  const t = useTranslations('');

  const aboutSiteMessages = getAboutSiteMessagesFromServer(locale);
  const siteArchitectureImageSrc = getAssetUrl(
    'site_architecture.png'
  ).toString();
  const lighthouseScoreImageSrc = getAssetUrl(
    'lighthouse_score.png'
  ).toString();
  const logoNextjsImageSrc = getAssetUrl('logo_nextjs.png').toString();

  return (
    <StSection>
      <SectionTitle id="about-site" hasMarginVertical={true}>
        About Site
      </SectionTitle>
      <SectionContent>
        {aboutSiteMessages.map((message, index) => {
          return (
            <React.Fragment key={`aboutSiteMessage_${index}`}>
              <p>{message}</p>
              {index === 0 ? (
                <ImageLogoNextjs imageSrc={logoNextjsImageSrc} />
              ) : index === 2 ? (
                <ImageLighthouseScore imageSrc={lighthouseScoreImageSrc} />
              ) : index === 4 ? (
                <ImageSiteArchitecture imageSrc={siteArchitectureImageSrc} />
              ) : null}
            </React.Fragment>
          );
        })}
      </SectionContent>
    </StSection>
  );
};

export default SectionAboutSite;
