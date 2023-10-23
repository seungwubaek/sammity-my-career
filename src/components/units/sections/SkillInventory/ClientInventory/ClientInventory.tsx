'use client';

import React from 'react';
import { useTheme } from 'styled-components';

import type { Skill, ClientSkill } from '@/types/skills';

import {
  StDivClientSkillInventory,
  StDivInvCtrlContainer,
  StDivInvCtrlSearchWrapper,
  StDivInvCtrlSearch,
  StInputInvCtrlSearch,
  StDivInvCtrlSearchBtn,
  StDivInvCtrlAlignWrapper,
  StDivInvCtrlAlignTitle,
  StDivInvCtrlAlignBtnWrapper,
  StDivInvCtrlAlignBtn,
} from './ClientInventory.styled';
import SkillItemSlot from '../SkillItemSlot';
import { IoSearch } from 'react-icons/io5';

type PropsClientInventory = {
  skills: Skill[];
};

const ClientInventory: React.FC<PropsClientInventory> = (props) => {
  const { skills: skillsFromServer } = props;

  const [searchKeyword, setSearchKeyword] = React.useState<string>('');
  const [skillAlignType, setSkillAlignType] = React.useState<
    'default' | 'name' | 'level'
  >('default');
  const [skills, setSkills] = React.useState<ClientSkill[]>(
    skillsFromServer.map((skill) => ({ ...skill, isActive: false }))
  );

  const theme = useTheme();

  React.useEffect(() => {
    if (skillAlignType === 'default') {
      setSkills(
        skillsFromServer.map((skill) => ({ ...skill, isActive: false }))
      );
    } else if (skillAlignType === 'name') {
    } else if (skillAlignType === 'level') {
    } else {
      throw new Error('Invalid skillAlignType');
    }
  }, [skillsFromServer, skillAlignType]);

  return (
    <>
      <StDivInvCtrlContainer>
        <StDivInvCtrlSearchWrapper>
          <StDivInvCtrlSearch>
            <StInputInvCtrlSearch
              value={searchKeyword}
              onChange={(event) => setSearchKeyword(event.target.value)}
            />
            <StDivInvCtrlSearchBtn>
              <IoSearch
                size={theme.layout.skillSearchBtnSize}
                style={{ cursor: 'pointer' }}
              />
            </StDivInvCtrlSearchBtn>
          </StDivInvCtrlSearch>
        </StDivInvCtrlSearchWrapper>
        <StDivInvCtrlAlignWrapper>
          <StDivInvCtrlAlignTitle>정렬</StDivInvCtrlAlignTitle>
          <StDivInvCtrlAlignBtnWrapper>
            <StDivInvCtrlAlignBtn
              $bgColor={theme.color.skillAlignDefault}
              $bgColorActive={theme.color.skillAlignDefaultActive}
              $isActive={skillAlignType === 'default'}
              onClick={() => setSkillAlignType('default')}
            >
              <span>기본순</span>
            </StDivInvCtrlAlignBtn>
            <StDivInvCtrlAlignBtn
              $bgColor={theme.color.skillAlignName}
              $bgColorActive={theme.color.skillAlignNameActive}
              $isActive={skillAlignType === 'name'}
              onClick={() => setSkillAlignType('name')}
            >
              <span>이름순</span>
            </StDivInvCtrlAlignBtn>
            <StDivInvCtrlAlignBtn
              $bgColor={theme.color.skillAlignLevel}
              $bgColorActive={theme.color.skillAlignLevelActive}
              $isActive={skillAlignType === 'level'}
              onClick={() => setSkillAlignType('level')}
            >
              <span>숙련도순</span>
            </StDivInvCtrlAlignBtn>
          </StDivInvCtrlAlignBtnWrapper>
        </StDivInvCtrlAlignWrapper>
      </StDivInvCtrlContainer>
      <StDivClientSkillInventory>
        {skills.map((skill, index) => (
          // SkillItemSlot은 server component이지만 client component 내부에서 사용하므로 client component로 취급된다.
          <SkillItemSlot key={skill.name + index} skill={skill} />
        ))}
      </StDivClientSkillInventory>
    </>
  );
};

export default ClientInventory;
