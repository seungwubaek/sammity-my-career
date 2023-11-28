import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { personalInfo } from '@/data/commonInfo';
import { getAssetUrl } from '@/lib/utils/url';

import { StDivLinkSet } from './LinkSet.styled';
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5';

type PropsLinkSet = {
  logoSize: number;
  linkList: {
    linkName: Links;
    logoColor?: string;
  }[];
};

type Links = 'github' | 'blog' | 'instagram';

const LinkSet: React.FC<PropsLinkSet> = (props) => {
  const { logoSize, linkList } = props;

  const t = useTranslations('');

  return (
    <StDivLinkSet>
      {linkList.map((link) => {
        switch (link.linkName) {
          case 'github':
            return (
              <Link
                key={link.linkName}
                href={`${personalInfo.github}`}
                target="_blank"
              >
                <IoLogoGithub
                  size={logoSize}
                  color={link.logoColor ?? 'black'}
                />
                &nbsp;{t('Profile.githubHeader')}
              </Link>
            );
          case 'blog':
            return (
              <Link
                key={link.linkName}
                href={`${personalInfo.gitblog}`}
                target="_blank"
              >
                <Image
                  src={getAssetUrl(
                    'favicon_gitpage_seungwubaek.ico'
                  ).toString()}
                  alt="blog icon"
                  width={logoSize}
                  height={logoSize}
                />
                &nbsp;{t('Profile.blogHeader')}
              </Link>
            );
          case 'instagram':
            return (
              <Link
                key={link.linkName}
                href={`${personalInfo.instagram}`}
                target="_blank"
              >
                <IoLogoInstagram
                  size={logoSize}
                  color={link.logoColor ?? 'black'}
                />
                &nbsp;Instagram
              </Link>
            );
          default:
            return null;
        }
      })}
    </StDivLinkSet>
  );
};

export default LinkSet;
