'use client';

import React from 'react';
import styled from 'styled-components';

import { IoChevronUp } from 'react-icons/io5';

const StDivToTopBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.secondary};
  box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.toTop};

  &:hover {
    transform: scale(1.1);
  }
`;

const ToTop: React.FC = () => {
  const goToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <StDivToTopBtn onClick={() => goToTop()}>
      <IoChevronUp size={20} />
    </StDivToTopBtn>
  );
};

export default ToTop;
