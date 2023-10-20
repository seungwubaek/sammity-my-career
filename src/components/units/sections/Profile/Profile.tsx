import React from 'react';

import {
  StSectionProfileSubSection,
  StH2ProfileSubSectionTitle,
  StDivProfileSubSectionContent,
  StTablePersonalInfo,
} from './Profile.styled';
import { SectionContent, StSection } from '@/components/units/sections/Section';
import { SectionTitle } from '@/components/units/sections/Section';

const SectionProfile: React.FC = () => {
  return (
    <StSection>
      <SectionTitle>프로필</SectionTitle>
      <SectionContent>
        <StSectionProfileSubSection>
          <StH2ProfileSubSectionTitle>기본정보</StH2ProfileSubSectionTitle>
          <StDivProfileSubSectionContent>
            <StTablePersonalInfo>
              <tbody>
                <tr>
                  <th>
                    <div>성 명</div>
                  </th>
                  <td>
                    <div>백 승 우</div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>생 년 월 일</div>
                  </th>
                  <td>
                    <div>1990. 04. 07</div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>나 이</div>
                  </th>
                  <td>
                    <div>30</div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>성 별</div>
                  </th>
                  <td>
                    <div>남</div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>이메일</div>
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
            </StTablePersonalInfo>
          </StDivProfileSubSectionContent>
        </StSectionProfileSubSection>
      </SectionContent>
    </StSection>
  );
};

export default SectionProfile;
