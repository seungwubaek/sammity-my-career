import React from 'react';
import { useTranslations } from 'next-intl';

import { getSkillsFromServer } from '@/lib/helpers/data';

import {
  SectionContent,
  SectionTitle,
  StSection,
} from '@/components/sections/SectionBase';
import { StDivNumSkillsBlock } from './SkillInventory.styled';
import ClientInventory from './ClientInventory';

type PropsSectionSkillInventory = React.PropsWithChildren<{
  locale: string;
}>;

const SectionSkillInventory: React.FC<PropsSectionSkillInventory> = () => {
  const t = useTranslations('');

  const skills = getSkillsFromServer();

  return (
    <StSection>
      <SectionTitle id="skill-inventory">
        {t('SkillInventory.title')}
      </SectionTitle>
      <SectionContent>
        <StDivNumSkillsBlock>
          {`${t('SkillInventory.NumSkills.beforeNum')} ` +
            `${skills.length} ` +
            `${t('SkillInventory.NumSkills.afterNum')}`}
        </StDivNumSkillsBlock>
        <ClientInventory skills={skills} />
      </SectionContent>
    </StSection>
  );
};

export default SectionSkillInventory;
