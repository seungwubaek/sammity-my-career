import React from 'react';
import dynamic from 'next/dynamic';

import { StSectionHeroSkillStacks } from './HeroSkillStack.styled';

const DynamicSkillStackSwiper = dynamic(
  () => import('@/components/units/sections/HeroSkillStacks/SkillStackSwiper'),
  { ssr: false }
);

const HeroSkillStacks: React.FC = () => {
  return (
    <StSectionHeroSkillStacks $wide>
      <DynamicSkillStackSwiper />
    </StSectionHeroSkillStacks>
  );
};

export default HeroSkillStacks;
