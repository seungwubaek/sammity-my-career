'use client';

import React from 'react';
import Link from 'next/link';
import styled, { useTheme } from 'styled-components';

import { siteInfo } from '@/data/commonInfo';

import Dropdown from '.';
import { IoLogoGithub, IoOpenOutline } from 'react-icons/io5';

const StLinkDropdownIcon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDivText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.9em;
`;

const GitHubDropdown: React.FC = () => {
  const theme = useTheme();

  return (
    <Dropdown
      dropdownBtn={
        <StLinkDropdownIcon href={siteInfo.githubUrl} target="_blank">
          <IoLogoGithub className="icon" size={theme.layout.headerIconSize} />
        </StLinkDropdownIcon>
      }
      menuComponentList={[
        <Link key="github" href={siteInfo.githubUrl} target="_blank">
          <li>
            <StDivText>
              View on GitHub&nbsp;
              <IoOpenOutline size={15} />
            </StDivText>
          </li>
        </Link>,
      ]}
      dropdownAlign="center"
    />
  );
};

export default GitHubDropdown;
