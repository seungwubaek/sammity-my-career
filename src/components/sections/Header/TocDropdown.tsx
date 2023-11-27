// 목차를 props로 받아서 목차 Link의 Dropdown을 만드는 컴포넌트

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import Dropdown from './Dropdown';
import { IoCaretDown } from 'react-icons/io5';

type TocDropdownProps = {
  tocMenuList: {
    href: string;
    title: string;
  }[];
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
      dropdownMenuList={tocMenuList.map((menu) => ({
        listKey: menu.href,
        menuComponent: <Link href={menu.href}>{menu.title}</Link>,
      }))}
    />
  );
};

export default TocDropdown;
