import React from 'react';
import dynamic from 'next/dynamic';

import { getSkillsFromServer } from '@/lib/helpers/data';

import { StSectionHeroSkillStacks } from './HeroSkillStack.styled';
import SkillStackSwiperLoading from './SkillStackSwiperLoading';

const DynamicSkillStackSwiper = dynamic(
  () => import('@/components/sections/HeroSkillStacks/SkillStackSwiper'),
  {
    ssr: false,
    loading: () => <SkillStackSwiperLoading />,
  }
);

const HeroSkillStacks: React.FC = () => {
  const skills = getSkillsFromServer();

  return (
    <StSectionHeroSkillStacks $wide>
      <DynamicSkillStackSwiper skills={skills} />
    </StSectionHeroSkillStacks>
  );
};

export default HeroSkillStacks;
