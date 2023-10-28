'use client';

import React from 'react';
import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

export const StDivClientSkillInventory = styled.div`
  display: grid;
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;

  ${generateCssByMedia(
    css`
      grid-template-columns: repeat(4, 1fr);
    `,
    ['desktop']
  )}

  ${generateCssByMedia(
    css`
      grid-template-columns: repeat(3, 1fr);
    `,
    ['tablet']
  )}

  ${generateCssByMedia(
    css`
      grid-template-columns: repeat(2, 1fr);
    `,
    ['mobile']
  )}
`;

export const StDivInvCtrlContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;

  ${generateCssByMedia(
    css`
      flex-direction: column;
      align-items: flex-start;
    `,
    ['tablet', 'mobile']
  )}
`;

export const StDivInvCtrlSearchWrapper = styled.div`
  display: flex;
  margin-right: 15px;
  min-height: ${({ theme }) => theme.layout.skillSlotHeight}px;
  padding: 5px 0;
`;

export const StDivInvCtrlSearch = styled.div`
  display: flex;
  padding: 8px 10px;
  border: 1px solid ${({ theme }) => theme.color.darkBorder};
  border-radius: 13px;
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.color.black};
  }
`;

export const StInputInvCtrlSearch = styled.input`
  flex: 0.8;
  width: 12rem;
  font-size: 1rem;
`;

export const StDivInvCtrlSearchBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0.2;
  width: ${({ theme }) => theme.layout.skillSearchBtnSize}px;
  margin-left: 4px;
`;

export const StDivInvCtrlAlignWrapper = styled.div`
  display: flex;
`;

export const StDivInvCtrlAlignTitle = styled.div`
  padding: 0.5rem 0;
  margin-left: 5px;
  margin-right: 15px;
  font-weight: bold;
`;

export const StDivInvCtrlAlignBtnWrapper = styled.div`
  padding: 0.5rem 0;
`;

export const StDivInvCtrlAlignBtn = styled.div<{
  $bgColor: string;
  $bgColorActive: string;
  $isActive: boolean;
}>`
  display: inline;
  padding: 1px 13px;
  border-radius: 15px;
  background-color: ${({ $bgColor }) => $bgColor};
  font-size: 0.9rem;
  cursor: pointer;
  border: 3px solid ${({ $bgColor }) => $bgColor};

  ${({ $isActive }) =>
    $isActive &&
    css<{ $bgColorActive: string }>`
      border: 3px solid ${({ $bgColorActive }) => $bgColorActive};
    `}

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const StDivSearchResultEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
`;
