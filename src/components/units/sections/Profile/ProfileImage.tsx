import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { getAssetUrl } from '@/lib/utils/url';

import { StDivImageWrapper, StDivProfileImage } from './ProfileImage.style';

type PropsProfileImage = {
  visibleMediaTypes: ('desktop' | 'tablet' | 'mobile')[];
  locale: string;
};

const ProfileImage: React.FC<PropsProfileImage> = (props) => {
  const { visibleMediaTypes, locale } = props;

  let classNamePostfixArr = [];
  if (visibleMediaTypes.includes('desktop')) {
    classNamePostfixArr.push('desktop');
  }
  if (visibleMediaTypes.includes('tablet')) {
    classNamePostfixArr.push('tablet');
  }
  if (visibleMediaTypes.includes('mobile')) {
    classNamePostfixArr.push('mobile');
  }

  const classNamePostfix = classNamePostfixArr.join('-');

  return (
    <StDivProfileImage className={clsx(`responsive-only-${classNamePostfix}`)}>
      <StDivImageWrapper>
        <Image
          src={getAssetUrl(`post_pain_${locale}.jpg`).toString()}
          alt="post for pain relief"
          width={400}
          height={400}
          quality={100}
          style={{ width: '140%', height: '140%' }}
        />
      </StDivImageWrapper>
    </StDivProfileImage>
  );
};

export default ProfileImage;
