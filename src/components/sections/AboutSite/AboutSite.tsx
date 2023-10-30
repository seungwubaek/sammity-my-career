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

  const { h2: aboutSiteH2Messages, p: aboutSiteMessages } =
    getAboutSiteMessagesFromServer(locale);
  const siteArchitectureImageSrc = getAssetUrl(
    'site_architecture.png'
  ).toString();
  const lighthouseScoreImageSrc = getAssetUrl(
    'lighthouse_score.png'
  ).toString();
  const logoNextjsImageSrc = getAssetUrl('logo_nextjs.png').toString();

  // TODO: 이렇게 복잡한 구조라면 mdx를 사용하는 것이 좋을 것 같다. 지금은 시간이 없지만 나중엔 수정할 수 있기를...
  return (
    <StSection>
      <SectionTitle id="about-site">About Site</SectionTitle>
      <SectionContent>
        {aboutSiteMessages.map((message, index) => {
          return (
            <React.Fragment key={`aboutSiteMessage_${index}`}>
              {index === 0 ? (
                <h2>{aboutSiteH2Messages[0]}</h2>
              ) : index === 3 ? (
                <>
                  <h2>{aboutSiteH2Messages[1]}</h2>
                  <ImageLighthouseScore imageSrc={lighthouseScoreImageSrc} />
                </>
              ) : index === 4 ? (
                <h2>{aboutSiteH2Messages[2]}</h2>
              ) : null}
              <p>{message}</p>
              {index === 0 ? (
                <ImageLogoNextjs imageSrc={logoNextjsImageSrc} />
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
