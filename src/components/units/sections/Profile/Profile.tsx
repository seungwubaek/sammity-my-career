import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { getAge } from '@/lib/utils/date';
import { getAssetUrl } from '@/lib/utils/url';

import {
  StSectionProfileSubSection,
  StH2ProfileSubSectionTitle,
  StDivProfileSubSectionContent,
  StTablePersonalInfo,
  StTableContactInfo,
} from './Profile.styled';
import { SectionContent, StSection } from '@/components/units/sections/Section';
import { SectionTitle } from '@/components/units/sections/Section';
import { IoMailOutline, IoLogoGithub } from 'react-icons/io5';

const SectionProfile: React.FC = () => {
  const t = useTranslations('');

  return (
    <StSection>
      <SectionTitle>{t('Profile.title')}</SectionTitle>
      <SectionContent>
        <StSectionProfileSubSection>
          <StH2ProfileSubSectionTitle>
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
          </StDivProfileSubSectionContent>
          <StH2ProfileSubSectionTitle>
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
                      <a href="mailto:whitesw01@gmail.com">
                        whitesw01@gmail.com
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </StTableContactInfo>
          </StDivProfileSubSectionContent>
          <StH2ProfileSubSectionTitle>
            {t('Profile.subTitleLinks')}
          </StH2ProfileSubSectionTitle>
          <StDivProfileSubSectionContent>
            <StTableContactInfo>
              <tbody>
                <tr>
                  <th>
                    <div>
                      <IoLogoGithub size={18} style={{ marginTop: 2 }} />
                      &nbsp;{t('Profile.githubHeader')}
                    </div>
                  </th>
                  <td>
                    <div>
                      <Link
                        href="https://github.com/seungwubaek"
                        target="_blank"
                      >
                        https://github.com/seungwubaek
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>
                      <Image
                        src={getAssetUrl(
                          'favicon_gitpage_seungwubaek.ico'
                        ).toString()}
                        alt="blog icon"
                        width={18}
                        height={18}
                        style={{ marginTop: 2 }}
                      />
                      &nbsp;{t('Profile.blogHeader')}
                    </div>
                  </th>
                  <td>
                    <div>
                      <Link
                        href="https://seungwubaek.github.io"
                        target="_blank"
                      >
                        https://seungwubaek.github.io
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </StTableContactInfo>
          </StDivProfileSubSectionContent>
        </StSectionProfileSubSection>
      </SectionContent>
    </StSection>
  );
};

export default SectionProfile;
