import React from 'react';

import { getAssetUrl } from '@/lib/utils/url';

import { StSectionHeroSkillStacks } from './HeroSkillStack.styled';
import SkillStackSwiper from '@/components/units/sections/HeroSkillStacks/SkillStackSwiper';

const HeroSkillStacks: React.FC = () => {
  return (
    <StSectionHeroSkillStacks $wide>
      <SkillStackSwiper assetUrl={getAssetUrl('').toString()} />
    </StSectionHeroSkillStacks>
  );
};

export default HeroSkillStacks;
