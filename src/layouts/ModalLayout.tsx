import React, { FC, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import BaseView from '../components/common/base-view/BaseView';
import { ModalLayoutProps } from './ModalLayout.interface';
import useModalDispatcher from '../hooks/useModalDispatcher';
import BaseModalHeader from '../components/common/base-modal/BaseModalHeader';
import BaseModalFooter from '../components/common/base-modal/BaseModalFooter';

const ModalLayout: FC<ModalLayoutProps> = (props) => {
  const {
    header,
    children,
    footer,
    isCancellable = true,
    isOutsideClick = false,
    modalContainerClassName,
  } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { goBackModal } = useModalDispatcher();

  const modalLayoutClasses = twMerge(`
    fixed
    p-12
    top-0 left-0 bottom-0 left-0 z-20
    flex w-full h-full max-h-full overflow-y-auto
    items-center justify-safe-center
    bg-black/50
    backdrop-blur
    supports-backdrop-blur:bg-white/50
    supports-backdrop-blur:bg-black/50
  `);

  const modalContainerClasses = twMerge(`
    m-auto
    rounded-lg
    bg-white
    dark:bg-slate-900
    min-w-[500px] max-w-[1200px]
    ${modalContainerClassName || ''}
  `);

  const outsideClickListener = (e: Event) => {
    !(
      containerRef.current
      && contentRef.current
      && e.composedPath().includes(contentRef.current)
    ) && goBackModal();
  };

  useEffect(() => {
    isCancellable
      && isOutsideClick
      && containerRef.current?.addEventListener('click', outsideClickListener);

    return () => {
      isCancellable
        && isOutsideClick
        && containerRef.current?.removeEventListener('click', outsideClickListener);
    };
  }, []);

  return (
    <BaseView className={modalLayoutClasses} ref={containerRef}>
      <BaseView className={modalContainerClasses} ref={contentRef}>
        {header && <BaseModalHeader isCancellable={isCancellable} {...header} />}
        <BaseView className={'p-4 h-full'}>{children}</BaseView>
        {footer && <BaseModalFooter {...footer} />}
      </BaseView>
    </BaseView>
  );
};

export default ModalLayout;
