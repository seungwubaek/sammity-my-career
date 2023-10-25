import React from 'react';
import { useTranslations } from 'next-intl';

import { getSkillsFromServer } from '@/lib/helpers/data';

import {
  SectionContent,
  SectionTitle,
  StSection,
} from '@/components/sections/SectionBase';
import ClientInventory from './ClientInventory';

type PropsSectionSkillInventory = React.PropsWithChildren<{
  locale: string;
}>;

const SectionSkillInventory: React.FC<PropsSectionSkillInventory> = () => {
  const t = useTranslations('');

  const skills = getSkillsFromServer();

  return (
    <StSection>
      <SectionTitle id="skill-inventory" hasMarginVertical={true}>
        {t('SkillInventory.title')}
      </SectionTitle>
      <SectionContent>
        <ClientInventory skills={skills} />
      </SectionContent>
    </StSection>
  );
};

export default SectionSkillInventory;