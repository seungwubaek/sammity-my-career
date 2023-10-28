'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
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
  StDivSearchResultEmpty,
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
  const [skillsFromClient, setSkillsFromClient] = React.useState<ClientSkill[]>(
    skillsFromServer.map((skill, index) => ({
      ...skill,
      defaultNo: index,
      isVisible: true,
      isActive: false,
    }))
  );

  const t = useTranslations('');
  const theme = useTheme();

  const searchSkills = React.useCallback(
    (skills: ClientSkill[], keyword: string) => {
      return skills.map((skill) => {
        if (skill.name.toLowerCase().includes(keyword.toLowerCase())) {
          return { ...skill, isVisible: true };
        } else {
          return { ...skill, isVisible: false };
        }
      });
    },
    []
  );

  const sortSkills = React.useCallback(
    (skills: ClientSkill[], alignType: string) => {
      if (alignType === 'default') {
        return skills.sort((a, b) => a.defaultNo - b.defaultNo);
      } else if (alignType === 'name') {
        return skills.sort((a, b) => a.name.localeCompare(b.name));
      } else if (alignType === 'level') {
        return skills.sort((a, b) => b.level - a.level);
      } else {
        throw new Error('Invalid skillAlignType');
      }
    },
    []
  );

  React.useEffect(() => {
    setSkillsFromClient((prevSkills) => [
      ...searchSkills(prevSkills, searchKeyword),
    ]);
  }, [searchSkills, searchKeyword]);

  React.useEffect(() => {
    setSkillsFromClient((prevSkills) => [
      ...sortSkills(prevSkills, skillAlignType),
    ]);
  }, [sortSkills, skillAlignType]);

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
          <StDivInvCtrlAlignTitle>
            {t('SkillInventory.Align.title')}
          </StDivInvCtrlAlignTitle>
          <StDivInvCtrlAlignBtnWrapper>
            <StDivInvCtrlAlignBtn
              $bgColor={theme.color.skillAlignDefault}
              $bgColorActive={theme.color.skillAlignDefaultActive}
              $isActive={skillAlignType === 'default'}
              onClick={() => setSkillAlignType('default')}
            >
              <span>{t('SkillInventory.Align.default')}</span>
            </StDivInvCtrlAlignBtn>
            <StDivInvCtrlAlignBtn
              $bgColor={theme.color.skillAlignName}
              $bgColorActive={theme.color.skillAlignNameActive}
              $isActive={skillAlignType === 'name'}
              onClick={() => setSkillAlignType('name')}
            >
              <span>{t('SkillInventory.Align.name')}</span>
            </StDivInvCtrlAlignBtn>
            <StDivInvCtrlAlignBtn
              $bgColor={theme.color.skillAlignLevel}
              $bgColorActive={theme.color.skillAlignLevelActive}
              $isActive={skillAlignType === 'level'}
              onClick={() => setSkillAlignType('level')}
            >
              <span>{t('SkillInventory.Align.level')}</span>
            </StDivInvCtrlAlignBtn>
          </StDivInvCtrlAlignBtnWrapper>
        </StDivInvCtrlAlignWrapper>
      </StDivInvCtrlContainer>
      <StDivClientSkillInventory>
        {skillsFromClient.filter((skill) => skill.isVisible).length === 0 ? (
          <StDivSearchResultEmpty>
            {t('SkillInventory.Search.resultEmpty')}
          </StDivSearchResultEmpty>
        ) : (
          skillsFromClient.map((skill) => {
            // SkillItemSlot은 server component이지만 client component 내부에서 사용하므로 client component로 취급된다.
            if (!skill.isVisible) {
              return null;
            }
            return (
              <SkillItemSlot
                key={`skillInventorySlot_${skill.name}`}
                skill={skill}
              />
            );
          })
        )}
      </StDivClientSkillInventory>
    </>
  );
};

export default ClientInventory;
