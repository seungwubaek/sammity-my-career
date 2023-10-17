import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import styles from './Header.module.scss';
import { IoMenuSharp } from 'react-icons/io5';
import HeaderRightMenu from './HeaderRightMenu';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header-section']}>
        <Link className={styles['header-left']} href="/">
          <Image
            src="/assets/images/sammity_logo.png"
            alt="sammity logo"
            width="236"
            height="59"
            style={{ width: '120px', height: 'auto' }}
            quality={100}
            priority
          />
          <span className={styles['logo-sub']}>Career</span>
        </Link>
        <div
          className={clsx([
            styles['header-right'],
            'responsive-ssr-desktop-tablet',
          ])}
        >
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
          <div>Lang</div>
        </div>
        <div
          className={clsx([
            styles['header-right__mobile'],
            'responsive-ssr-mobile',
          ])}
        >
          <HeaderRightMenu>
            <IoMenuSharp size={26} />
          </HeaderRightMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
