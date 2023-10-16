'use client';

import React, { type PropsWithChildren } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import styles from './HeaderRightMenu.module.scss';

type MainProps = PropsWithChildren<{ dropdownIconSize: number }>;

const HeaderRightMenu: React.FC<MainProps> = ({
  dropdownIconSize,
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const t = useTranslations('Header');

  return (
    <>
      <div
        className={styles['dropdown-menu__button']}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {children}
      </div>
      <ul
        className={clsx(
          { [styles['dropdown-menu--visible']]: isMenuOpen },
          styles['dropdown-menu']
        )}
      >
        <Link className={styles['dropdown-menu__item']} href="#projects">
          <li>Projects</li>
        </Link>
        <Link className={styles['dropdown-menu__item']} href="#contact">
          <li>Contact</li>
        </Link>
        <div className={styles['dropdown-menu__item']}>
          <li className={styles['dropdown-menu__item']}>{t('lang')}</li>
        </div>
      </ul>
    </>
  );
};

export default HeaderRightMenu;
