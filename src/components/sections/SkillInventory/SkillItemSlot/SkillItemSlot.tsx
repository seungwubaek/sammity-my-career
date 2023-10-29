import React from 'react';
import clsx from 'clsx';

import type { Skill } from '@/types/skills';

import { pixelGrayBase64 } from '@/data/loading';

import {
  StDivSkillItemSlot,
  StDivSkillNameWrapper,
} from './SkillItemSlot.styled';
import SkillExpGauge from './SkillExpGauge';
import ImageWithSizes from '@/components/units/ImageWithSizes';

type PropsSkillItemSlot = {
  skill: Skill;
};

const SkillItemSlot: React.FC<PropsSkillItemSlot> = (props) => {
  const { skill } = props;

  return (
    <StDivSkillItemSlot>
      <StDivSkillNameWrapper>
        <div
          className={clsx('skill-logo-wrapper', {
            'square-border': skill.logo.borderRadius === 'square',
          })}
        >
          <ImageWithSizes
            src={skill.logo.url}
            alt={skill.name}
            mediaSizes={{ desktop: skill.logo.width }}
          />
        </div>
        <span>{skill.name}</span>
      </StDivSkillNameWrapper>
      <SkillExpGauge skill={skill} />
    </StDivSkillItemSlot>
  );
};

export default SkillItemSlot;
