'use client';

import React from 'react';
import styled from 'styled-components';

import { Portal } from './Portal';
import { IoClose } from 'react-icons/io5';

// types
// =================================================================================================

type ModalAction = {
  isModalOpen: boolean;
  modalTitle?: string;
  modalContent?: React.ReactNode;
};

type PropsModalPortal = {
  onBeforeClose?: () => void; // backdrop이 아닌 일반 close 상황
  onBeforeBackdropClose?: () => void; // only backdrop close 상황
};

type ParamsOpenModal = {
  modalTitle?: string;
  modalContent: React.ReactNode;
};

// Styled Components
// =================================================================================================

const StDivModalPortalWrapper = styled.div``;

const StDivBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.modalBackdrop};
  z-index: ${({ theme }) => theme.zIndex.modalBackdrop};
`;

const StDivModalPortalContentWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 20px;
  z-index: ${({ theme }) => theme.zIndex.modal};
  overflow: hidden;
`;

const StDivModalPortalHeaderWrapper = styled.div`
  border-bottom: solid 1px ${({ theme }) => theme.color.border};
`;

const StDivModalPortalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 10px ${({ theme }) => theme.layout.modalHorizontalPadding}px;
  max-width: 100vw;
`;

const StDivModalPortalHeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  font-weight: 700;
  white-space: nowrap;
`;

const StDivModalPortalHeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const StDivCloseIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

// React Context
// =================================================================================================

const ModalPortalContext = React.createContext<{
  modalAction: ModalAction;
  setModalAction: React.Dispatch<React.SetStateAction<ModalAction>>;
}>({
  modalAction: {
    isModalOpen: false,
    modalTitle: undefined,
    modalContent: undefined,
  },
  setModalAction: () => {},
});

// React Provider & Hooks
// =================================================================================================

export const ModalPortalProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [modalAction, setModalAction] = React.useState<ModalAction>({
    isModalOpen: false,
    modalTitle: undefined,
    modalContent: undefined,
  });

  return (
    <ModalPortalContext.Provider
      value={{
        modalAction,
        setModalAction,
      }}
    >
      {children}
    </ModalPortalContext.Provider>
  );
};

export const useModalPortal = () => {
  const { modalAction, setModalAction } = React.useContext(ModalPortalContext);

  const openModal = React.useCallback(
    (params: ParamsOpenModal) => {
      const { modalTitle, modalContent } = params;
      setModalAction({
        isModalOpen: true,
        modalTitle,
        modalContent,
      });
    },
    [setModalAction]
  );

  const closeModal = React.useCallback(() => {
    setModalAction({
      isModalOpen: false,
      modalTitle: undefined,
      modalContent: undefined,
    });
  }, [setModalAction]);

  return {
    modalAction,
    setModalAction,
    openModal,
    closeModal,
  };
};

// React Component
// =================================================================================================

const ModalPortal: React.FC<PropsModalPortal> = (props) => {
  const { onBeforeClose, onBeforeBackdropClose } = props;
  const {
    modalAction: { isModalOpen, modalTitle, modalContent },
    closeModal,
  } = useModalPortal();

  return (
    <Portal selector="#modal-portal">
      {isModalOpen ? (
        <StDivModalPortalWrapper>
          <StDivBackdrop
            onClick={() => {
              onBeforeBackdropClose && onBeforeBackdropClose();
              closeModal();
            }}
          />
          <StDivModalPortalContentWrapper>
            <StDivModalPortalHeaderWrapper>
              <StDivModalPortalHeader>
                <StDivModalPortalHeaderLeft>
                  {modalTitle}
                </StDivModalPortalHeaderLeft>
                <StDivModalPortalHeaderRight>
                  <StDivCloseIconWrapper>
                    <IoClose
                      size={20}
                      onClick={() => {
                        onBeforeClose && onBeforeClose();
                        closeModal();
                      }}
                    />
                  </StDivCloseIconWrapper>
                </StDivModalPortalHeaderRight>
              </StDivModalPortalHeader>
            </StDivModalPortalHeaderWrapper>
            {modalContent}
          </StDivModalPortalContentWrapper>
        </StDivModalPortalWrapper>
      ) : null}
    </Portal>
  );
};

export default ModalPortal;
