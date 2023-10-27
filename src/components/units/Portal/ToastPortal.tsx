'use client';

import React from 'react';
import styled, { css } from 'styled-components';

import { generateCssByMedia } from '@/lib/helpers/styling';

import { Portal } from './Portal';

// Styled Components
// =================================================================================================

const StDivToastPositioner = styled.div`
  position: fixed;
  // 아래 컴포넌트 render 영역에서 inline style로 줘야
  // 맨처음 element가 초기화 된 이후 transition이 정상적으로 적용됨
  // left: -9999px;
  bottom: 0;
  display: block;
  transition: opacity 0.2s ease-in-out;
  z-index: 100;

  ${generateCssByMedia(
    css`
      width: 100%;
    `,
    ['tablet', 'mobile']
  )}
`;

const StDivToastWrapper = styled.div`
  display: block;
  color: white;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 16px;
  cursor: pointer;

  ${generateCssByMedia(
    css`
      padding: 10px 20px;
      margin-left: 20px;
      margin-bottom: 20px;
    `,
    ['desktop']
  )}

  ${generateCssByMedia(
    css`
      padding: 20px;
      margin: 0 10px 10px 10px;
    `,
    ['tablet', 'mobile']
  )}
`;

const StSpanToastMessage = styled.span``;

// React Context
// =================================================================================================

export const ToastPortalContext = React.createContext<{
  isToastPortalShow: { value: boolean };
  setIsToastPortalShow: (value: boolean) => void;
  showToastPortal: (message: string) => void;
  message: string;
}>({
  isToastPortalShow: { value: false },
  setIsToastPortalShow: () => {},
  showToastPortal: () => {},
  message: '',
});

export const ToastPortalProvider: React.FC<React.PropsWithChildren> = (
  props
) => {
  const { children } = props;

  const [isShow, setIsShow] = React.useState({ value: false });
  const [message, setMessage] = React.useState('');

  const setIsToastPortalShow = React.useCallback((v: boolean) => {
    // [ToastPortal의 show 로직]
    // 바로 아래의 `showToastPortal` 함수가 외부에서 호출(custom hook으로 제공되고 있음)되면,
    // `showToastPortal` 함수는 본 함수를 호출하여 `isShow` 상태값에 `true`를 할당한다.
    // ToastPortal은 내부의 useEffect에 의해 show/hide transition이 제어된다.
    // 그리고 그 useEffect는 dependencies에 `isShow` 상태값을 가지고 있다.
    // useEffect는 `isShow`가 `true`일 때 show transition을 적용하고
    // show transition -> hide transition 을 거쳐 `isShow`를 다시 `false`로 할당한다.
    // 또한 맨처음 `isShow`는 `false`로 초기화 되어 있기 때문에 useEffect는 아무런 일도 하지 않는다.

    // [ToastPortal의 show 로직의 연속 호출 시 문제점]
    // `isShow`의 연속 `true` 재할당은 re-render 및 useEffect의 호출을 발생시키지 않으므로 별도의 처리가 필요하다.
    // 만약 Toast가 한번 show 로직이 호출되어 실행 되었고 hide transition까지 완료하기 전에
    // `showToastPortal` 함수를 2회 이상 연속 호출하면,
    // 다시말해, `isShow` 상태값에 `true`를 2회 이상 연속 할당하면,
    // `isShow` 상태에는 첫회 호출에서 이미 `true` 값이 할당되었으므로 같은 값(`true`)을 또 할당하는 셈이며,
    // 이러한 재할당은 React의 re-render를 발생시키지 않는다.
    // 또한 만약 ToastPortal의 re-render를 발생시킬 수 있는 다른 상태값을 로직을 추가해서
    // ToastPortal의 re-render를 발생시킨다고 해도 아래의 이유로 transition이 작동하지 않는다.
    // Toast의 transition을 trigger 시키는 로직은 ToastPortal 컴포넌트 내부의 useEffect가 담당하고 있다고 했다.
    // 이 useEffect는 여전히 dependencies에 있는 `isShow` 상태값이 `true`일 때만 transition을 trigger 한다.
    // 만약 `isShow`가 연속적인 setState 호출에 의해 `true`에서 또 `true`로 할당된 경우,
    // useEffect는 상태값이 변화하지 않았다고 판단하므로 useEffect가 다시 호출되지 않는다.

    // [ToastPortal의 show 로직의 연속 호출을 위한 올바른 해결책]
    // setState에 같은 상태값을 넘기더라도 다른 참조를 가지도록 처리하는 방식으로 위 문제점을 해결할 수 있다.
    // 따라서 setState에 객체를 넘기고 deconstruction 하는 방식으로 신규 참조 처리 한다.
    // 이렇게 하면 `isShow` 상태값이 연속적으로 `true`로 재할당 되더라도 무조건 re-render가 발생한다.
    // ToastPortal의 useEffect는 dependencies 변화 판단에서 `isShow` 상태값의 참조가 변화했으므로
    // re-render와 함께 다시 호출된다. 그리고 상태값은 `true` 이므로 (정확히는 객체 내부에 갖고 있는 값)
    // useEffect는 show transition을 trigger 한다.
    setIsShow({ ...{ value: v } });
  }, []);

  const showToastPortal = React.useCallback(
    (message: string) => {
      setMessage(message);
      setIsToastPortalShow(true);
    },
    [setIsToastPortalShow]
  );

  return (
    <ToastPortalContext.Provider
      value={{
        isToastPortalShow: isShow,
        setIsToastPortalShow,
        showToastPortal,
        message,
      }}
    >
      {children}
    </ToastPortalContext.Provider>
  );
};

export const useToastPortal = () => {
  const { showToastPortal, isToastPortalShow, setIsToastPortalShow, message } =
    React.useContext(ToastPortalContext);

  return { showToastPortal, isToastPortalShow, setIsToastPortalShow, message };
};

// React Component
// =================================================================================================

const ToastPortal: React.FC = () => {
  const portalStage = React.useRef<
    | 'listening'
    | 'initializing'
    | 'initialized'
    | 'appearing'
    | 'appeared'
    | 'hiding'
    | 'hidden'
  >('hidden');

  const { isToastPortalShow, setIsToastPortalShow, message } = useToastPortal();

  const toastPortalRef = React.useRef<HTMLDivElement>(null);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const showTime = 2000;

  const hidePortal = React.useCallback(() => {
    if (toastPortalRef.current) {
      timerRef.current && clearTimeout(timerRef.current);
      portalStage.current = 'hiding';
      toastPortalRef.current.style.setProperty('opacity', '0');
    } else {
      throw new Error('toastPortalRef.current is null');
    }
  }, []);

  const showPortal = React.useCallback(() => {
    if (toastPortalRef.current) {
      portalStage.current = 'appearing';
      timerRef.current && clearTimeout(timerRef.current);
      toastPortalRef.current.style.setProperty('left', '0');
      toastPortalRef.current.style.setProperty('opacity', '1');
      timerRef.current = setTimeout(() => {
        if (toastPortalRef.current) {
          hidePortal();
        }
      }, showTime);
    } else {
      throw new Error('toastPortalRef.current is null');
    }
  }, [hidePortal]);

  const initPortal = React.useCallback(() => {
    if (toastPortalRef.current) {
      // plain js라면 마지막에 force-redraw를 위해 offsetHeight를 읽어야 하는데
      // react에서는 그냥 되네?
      toastPortalRef.current.style.setProperty('transition', 'none');
      toastPortalRef.current.style.setProperty('left', '-9999px');
      toastPortalRef.current.style.setProperty('opacity', '0');
      portalStage.current = 'initialized';
      setIsToastPortalShow(true);
    } else {
      throw new Error('toastPortalRef.current is null');
    }
  }, [setIsToastPortalShow]);

  React.useEffect(() => {
    if (!toastPortalRef.current) return;
    if (isToastPortalShow.value && portalStage.current === 'initialized') {
      toastPortalRef.current.style.setProperty('transition', '');
      showPortal();
    } else if (isToastPortalShow.value) {
      initPortal();
    }
  }, [isToastPortalShow, initPortal, showPortal]);

  const handleTransitionEnd = React.useCallback(() => {
    switch (portalStage.current) {
      case 'hiding': {
        // 숨김 transition이 끝나면
        if (toastPortalRef.current) {
          toastPortalRef.current.style.setProperty('left', '-9999px');
          portalStage.current = 'hidden';
          setIsToastPortalShow(false);
        }
      }
      default:
        break;
    }
  }, [setIsToastPortalShow]);

  return (
    <Portal selector="#toast-portal">
      <StDivToastPositioner
        ref={toastPortalRef}
        onTransitionEnd={handleTransitionEnd}
        style={{
          left: '-9999px',
          opacity: '0',
        }}
      >
        <StDivToastWrapper onClick={hidePortal}>
          <StSpanToastMessage>{message}</StSpanToastMessage>
        </StDivToastWrapper>
      </StDivToastPositioner>
    </Portal>
  );
};

export default ToastPortal;
