import dynamic from 'next/dynamic';
import { unstable_setRequestLocale } from 'next-intl/server';

import { StMain } from './page.styled';
import SectionHeroImage from '@/components/sections/HeroImage';
import SectionHeroSkillStacks from '@/components/sections/HeroSkillStacks';
import SectionProfile from '@/components/sections/Profile';
import SectionCareer from '@/components/sections/Career/Career';
import SectionSkillInventory from '@/components/sections/SkillInventory';
import SectionProjects from '@/components/sections/Projects';
import SectionPortfolio from '@/components/sections/Portfolio';
import SectionSelfIntroduction from '@/components/sections/SelfIntroduction';
import SectionAboutSite from '@/components/sections/AboutSite/AboutSite';
import SectionFooter from '@/components/sections/Footer';

const DynamicToastPortal = dynamic(
  () => import('@/components/units/Portal/ToastPortal'),
  {
    ssr: false,
  }
);

const DynamicModalPortal = dynamic(
  () => import('@/components/units/Portal/ModalPortal'),
  {
    ssr: false,
  }
);

const Main = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);

  return (
    <StMain>
      <SectionHeroImage locale={locale} />
      <SectionHeroSkillStacks />
      <SectionProfile locale={locale} />
      <SectionCareer locale={locale} />
      <SectionSkillInventory locale={locale} />
      <SectionProjects locale={locale} />
      <SectionPortfolio locale={locale} />
      <SectionSelfIntroduction locale={locale} />
      <SectionAboutSite locale={locale} />
      <SectionFooter />
      <DynamicToastPortal />
      <DynamicModalPortal />
    </StMain>
  );
};

export default Main;
