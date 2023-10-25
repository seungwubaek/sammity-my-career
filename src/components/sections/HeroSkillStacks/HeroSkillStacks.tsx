import React from 'react';

import { getSkillsFromServer } from '@/lib/helpers/data';

import { StSectionHeroSkillStacks } from './HeroSkillStack.styled';
import SkillStackSwiper from '@/components/sections/HeroSkillStacks/SkillStackSwiper';

const HeroSkillStacks: React.FC = () => {
  const skills = getSkillsFromServer();

  return (
    <StSectionHeroSkillStacks $wide>
      <SkillStackSwiper skills={skills} />
    </StSectionHeroSkillStacks>
  );
};

export default HeroSkillStacks;
