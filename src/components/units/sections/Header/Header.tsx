import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import {
  StHeaderWrapper,
  StSectionHeader,
  StLinkHeaderLeft,
  StSpanLogoSub,
  StDivHeaderRight,
  StDivHeaderRightMobile,
} from './Header.styled';

import { IoMenuSharp } from 'react-icons/io5';
import HeaderRightMenu from './HeaderRightMenu';

const Header: React.FC = () => {
  return (
    <StHeaderWrapper>
      <StSectionHeader>
        <StLinkHeaderLeft href="/">
          <Image
            src="/assets/images/sammity_logo.png"
            alt="sammity logo"
            width="236"
            height="59"
            style={{ width: '120px', height: 'auto' }}
            quality={100}
            priority
          />
          <StSpanLogoSub>Career</StSpanLogoSub>
        </StLinkHeaderLeft>
        <StDivHeaderRight className={clsx('responsive-ssr-desktop-tablet')}>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
          <div>Lang</div>
        </StDivHeaderRight>
        <StDivHeaderRightMobile className={clsx('responsive-ssr-mobile')}>
          <HeaderRightMenu>
            <IoMenuSharp size={26} />
          </HeaderRightMenu>
        </StDivHeaderRightMobile>
      </StSectionHeader>
    </StHeaderWrapper>
  );
};

export default Header;
