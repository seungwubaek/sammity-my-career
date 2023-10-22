import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { getAssetUrl } from '@/lib/utils/url';

import { StDivImageWrapper, StDivProfileImage } from './ProfileImage.style';
import ImageWithSizes from '@/components/units/ImageWithSizes';

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

  console.log(getAssetUrl(`post_pain_${locale}.jpg`).toString());

  return (
    <StDivProfileImage className={clsx(`responsive-only-${classNamePostfix}`)}>
      <StDivImageWrapper>
        <ImageWithSizes
          src={getAssetUrl(`post_pain_${locale}.jpg`).toString()}
          alt="post for pain relief"
          quality={100}
          sizes={{ desktop: 400 }}
        />
      </StDivImageWrapper>
    </StDivProfileImage>
  );
};

export default ProfileImage;
