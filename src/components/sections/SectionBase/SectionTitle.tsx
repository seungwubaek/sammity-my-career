'use client';

import React from 'react';
import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

import { IoLinkOutline } from 'react-icons/io5';
import { useToastPortal } from '@/components/units/Portal';

type PropsSectionTitle = React.PropsWithChildren<{
  id?: string;
  noMarginTop?: boolean;
}>;

export const StH1SectionTitleWrapper = styled.h1<{
  $noMarginTop?: boolean;
}>`
  position: relative;
  font-weight: 700;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  ${({ $noMarginTop }) =>
    $noMarginTop &&
    css`
      margin-top: 0;
    `}

  ${generateCssByMedia(
    css`
      font-size: ${({ theme }) => theme.font.h1Size};
    `,
    ['desktop']
  )}

  ${generateCssByMedia(
    css`
      font-size: ${({ theme }) => theme.font.tabletH1Size};
    `,
    ['tablet']
  )}

  ${generateCssByMedia(
    css`
      font-size: ${({ theme }) => theme.font.mobileH1Size};
    `,
    ['mobile']
  )}
`;

export const StDivSectionTitleLinkWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const StDivAnchorWrapper = styled.div<{
  $isShowAnchor?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  margin-left: 8px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${generateCssByMedia(
    css`
      opacity: 1; // touch mode에서는 hover가 없으므로 항상 보이도록 함
    `,
    ['tablet', 'mobile']
  )}

  ${({ $isShowAnchor }) =>
    $isShowAnchor &&
    css`
      opacity: 1;
    `}
`;

export const StSpanSectionTitle = styled.span<{ $underlineWidth: number }>`
  position: relative;
  // - after의 height 만큼 보정
  padding-bottom: ${({ $underlineWidth: underlineWidth }) =>
    `${underlineWidth}px`};
  &::after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${({ $underlineWidth: underlineWidth }) => `${underlineWidth}px`};
    border-radius: ${({ $underlineWidth: underlineWidth }) =>
      `${underlineWidth / 2}px`};
    background-color: ${({ theme }) => theme.color.secondary};
    content: '';
  }
`;

export const SectionTitle: React.FC<PropsSectionTitle> = (props) => {
  const { id, noMarginTop = false, children } = props;

  const [isShowAnchor, setIsShowAnchor] = React.useState(false);

  const showAnchor = React.useCallback(() => {
    setIsShowAnchor(true);
  }, []);

  const hideAnchor = React.useCallback(() => {
    setIsShowAnchor(false);
  }, []);

  const { showToastPortal } = useToastPortal();

  return (
    <StH1SectionTitleWrapper id={id} $noMarginTop={noMarginTop}>
      <StDivSectionTitleLinkWrapper
        onMouseEnter={showAnchor}
        onMouseLeave={hideAnchor}
        onClick={() => {
          if (navigator.clipboard === undefined) {
            showToastPortal(
              '클립보드 복사 기능은 보안 프로토콜(https) 또는 localhost 환경에서만 사용할 수 있습니다.'
            );
          } else {
            const urlWithHash = new URL(window.location.href);
            urlWithHash.hash = id ?? '';
            const urlStr = urlWithHash.toString();
            navigator.clipboard.writeText(urlStr);
            showToastPortal(`링크가 복사되었습니다.`);
          }
        }}
      >
        <StSpanSectionTitle $underlineWidth={4}>{children}</StSpanSectionTitle>
        <StDivAnchorWrapper $isShowAnchor={isShowAnchor}>
          <IoLinkOutline size={18} />
        </StDivAnchorWrapper>
      </StDivSectionTitleLinkWrapper>
    </StH1SectionTitleWrapper>
  );
};

export default SectionTitle;
