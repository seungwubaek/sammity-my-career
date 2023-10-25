'use client';

import React from 'react';

import { type Skill } from '@/types/skills';

import { StDivGauge, StDivGaugeBackground } from './SkillExpGauge.styled';
import { useTheme } from 'styled-components';

type PropsSkillExpGauge = {
  skill: Skill;
};

const SkillExpGauge: React.FC<PropsSkillExpGauge> = (props) => {
  const { skill } = props;

  const theme = useTheme();

  const levelColor =
    skill.level >= 9
      ? theme.color.skillExpGaugeHigh
      : skill.level >= 5
      ? theme.color.skillExpGaugeMid
      : skill.level >= 2
      ? theme.color.skillExpGaugeLow
      : theme.color.skillExpGaugeBeginner;

  return (
    <StDivGaugeBackground>
      <StDivGauge $level={skill.level} $levelColor={levelColor} />
    </StDivGaugeBackground>
  );
};

export default SkillExpGauge;
