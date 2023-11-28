import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import { personalInfo } from '@/data/commonInfo';
import { getAge } from '@/lib/utils/date';

import {
  StSectionProfileSubSection,
  StH2ProfileSubSectionTitle,
  StDivProfileSubSectionContent,
  StTablePersonalInfo,
  StTableContactInfo,
  StTableLinkList,
} from './Profile.styled';
import { SectionContent, StSection } from '@/components/sections/SectionBase';
import { SectionTitle } from '@/components/sections/SectionBase';
import LinkSet from '@/components/units/LinkSet';
import { IoMailOutline } from 'react-icons/io5';
import ProfileImage from './ProfileImage';

type PropsSectionProfile = {
  locale: string;
};

const SectionProfile: React.FC<PropsSectionProfile> = ({ locale }) => {
  const t = useTranslations('');

  return (
    <StSection>
      <SectionTitle id="profile" noMarginTop={true}>
        {t('Profile.title')}
      </SectionTitle>
      <SectionContent>
        <StSectionProfileSubSection>
          <StH2ProfileSubSectionTitle id="personal-info">
            {t('Profile.subTitlePersonalInfo')}
          </StH2ProfileSubSectionTitle>
          <StDivProfileSubSectionContent>
            <StTablePersonalInfo>
              <tbody>
                <tr>
                  <th>
                    <div>{t('Profile.nameHeader')}</div>
                  </th>
                  <td>
                    <div>{t('Profile.name')}</div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>{t('Profile.birthHeader')}</div>
                  </th>
                  <td>
                    <div>{t('Profile.birth')}</div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>{t('Profile.ageHeader')}</div>
                  </th>
                  <td>
                    <div>{getAge(new Date('1990.04.07'))}</div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>{t('Profile.sexHeader')}</div>
                  </th>
                  <td>
                    <div>{t('Profile.sex')}</div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>{t('Profile.locationHeader')}</div>
                  </th>
                  <td>
                    <div>{t('Profile.location')}</div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>{t('Profile.educationHeader')}</div>
                  </th>
                  <td>
                    <div>{t('Profile.education')}</div>
                  </td>
                </tr>
              </tbody>
            </StTablePersonalInfo>
            <ProfileImage locale={locale} visibleMediaTypes={['desktop']} />
          </StDivProfileSubSectionContent>
          <StH2ProfileSubSectionTitle id="contact">
            {t('Profile.subTitleContact')}
          </StH2ProfileSubSectionTitle>
          <StDivProfileSubSectionContent>
            <StTableContactInfo>
              <tbody>
                <tr>
                  <th>
                    <div>
                      <IoMailOutline size={18} style={{ marginTop: 2 }} />
                      &nbsp;{t('Profile.emailHeader')}
                    </div>
                  </th>
                  <td>
                    <div>
                      <Link
                        className={clsx('underline')}
                        href={`mailto:${personalInfo.email}`}
                      >
                        {personalInfo.email}
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </StTableContactInfo>
          </StDivProfileSubSectionContent>
          <StH2ProfileSubSectionTitle id="links">
            {t('Profile.subTitleLinks')}
          </StH2ProfileSubSectionTitle>
          <StDivProfileSubSectionContent>
            <StTableLinkList>
              <tbody>
                <tr>
                  <th>
                    <div></div>
                  </th>
                  <td>
                    <LinkSet
                      logoSize={18}
                      linkList={[{ linkName: 'github' }, { linkName: 'blog' }]}
                    />
                  </td>
                </tr>
              </tbody>
            </StTableLinkList>
          </StDivProfileSubSectionContent>
        </StSectionProfileSubSection>
        <ProfileImage
          locale={locale}
          visibleMediaTypes={['tablet', 'mobile']}
        />
      </SectionContent>
    </StSection>
  );
};

export default SectionProfile;
