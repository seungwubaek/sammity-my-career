import { unstable_setRequestLocale } from 'next-intl/server';

import { StMain } from './page.styled';
import SectionHeroImage from '@/components/units/sections/HeroImage';
import SectionHeroSkillStacks from '@/components/units/sections/HeroSkillStacks';
import SectionProfile from '@/components/units/sections/Profile';

const Main = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);

  return (
    <StMain>
      <SectionHeroImage />
      <SectionHeroSkillStacks />
      <SectionProfile />
    </StMain>
  );
};

export default Main;
