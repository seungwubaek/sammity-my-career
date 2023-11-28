'use client';

// 목차를 props로 받아서 목차 Link의 Dropdown을 만드는 컴포넌트

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import Dropdown from '.';
import { IoCaretDown } from 'react-icons/io5';

type TocDropdownProps = {
  tocMenuList: TocMenu[];
};

type TocMenu = {
  href: string;
  title: string;
};

const StSpanTitle = styled.span`
  white-space: nowrap;
`;

const DropdownComponent: React.FC<{ menu: TocMenu }> = (props) => {
  const { menu } = props;
  return (
    <Link href={menu.href}>
      <li key={menu.href}>
        <StSpanTitle>{menu.title}</StSpanTitle>
      </li>
    </Link>
  );
};

const TocDropdown: React.FC<TocDropdownProps> = (props) => {
  const { tocMenuList } = props;

  const t = useTranslations('');

  return (
    <Dropdown
      dropdownBtn={
        <div>
          <span>{t('Header.toc')} </span>
          <IoCaretDown size={13} />
        </div>
      }
      menuComponentList={tocMenuList.map((menu) => (
        <DropdownComponent key={menu.href} menu={menu} />
      ))}
      dropdownAlign="center"
    />
  );
};

export default TocDropdown;
