'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const StHeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const StSectionHeader = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.layout.contentWidth}px;
  width: 100%;
  height: 100%;
  padding: 0 ${({ theme }) => theme.layout.sectionHorizontalPadding}px;
  margin: 0 auto;
`;

export const StLinkHeaderLeft = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 180px;
`;

export const StDivHeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  height: 100%;
`;

export const StDivHeaderRightMobile = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;
