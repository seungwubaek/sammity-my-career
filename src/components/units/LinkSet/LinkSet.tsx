import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { personalInfo } from '@/data/commonInfo';
import { getAssetUrl } from '@/lib/utils/url';

import { StDivLinkSet } from './LinkSet.styled';
import { IoLogoGithub } from 'react-icons/io5';

type PropsLinkSet = {
  logoSize: number;
  githubColor: 'black' | 'white';
};

const LinkSet: React.FC<PropsLinkSet> = (props) => {
  const { logoSize, githubColor } = props;

  const t = useTranslations('');

  return (
    <StDivLinkSet>
      <Link href={`${personalInfo.github}`} target="_blank">
        <IoLogoGithub size={logoSize} color={githubColor} />
        &nbsp;{t('Profile.githubHeader')}
      </Link>
      <Link href={`${personalInfo.gitblog}`} target="_blank">
        <Image
          src={getAssetUrl('favicon_gitpage_seungwubaek.ico').toString()}
          alt="blog icon"
          width={logoSize}
          height={logoSize}
        />
        &nbsp;{t('Profile.blogHeader')}
      </Link>
    </StDivLinkSet>
  );
};

export default LinkSet;
