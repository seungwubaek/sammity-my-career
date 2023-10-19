import dynamic from 'next/dynamic';

import { StMain } from './page.styled';
import SectionHeroImage from '@/components/units/sections/HeroImage';
import SectionHeroSkillStacks from '@/components/units/sections/HeroSkillStacks';
import SectionProfile from '@/components/units/sections/Profile';

const Main = () => {
  return (
    <StMain>
      <SectionHeroImage />
      <SectionHeroSkillStacks />
      <SectionProfile />
    </StMain>
  );
};

export default Main;
