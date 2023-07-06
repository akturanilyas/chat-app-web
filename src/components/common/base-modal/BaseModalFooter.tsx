import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import useModalDispatcher from '../../../hooks/useModalDispatcher';
import BaseView from '../base-view/BaseView';
import TextButton from '../button/TextButton';
import { BaseModalFooterProps } from './BaseModalFooter.interface';
import Button from '../button/Button';

const BaseModalFooter: FC<BaseModalFooterProps> = (props) => {
  const { buttons } = props;
  const { goBackModal } = useModalDispatcher();

  const containerClasses = twMerge(`
    w-full py-2
    bg-white
    dark:bg-slate-900
    rounded-b-lg
    border-t
    border-slate-200
    dark:border-slate-700
  `);

  const contentClasses = twMerge(`
    flex-row justify-center gap-2
  `);

  const buttonClasses = twMerge(`
    text-sm py-2.5 px-5
    border border-slate-500 dark:border-slate-700
  `);

  const buttonTextClasses = twMerge(`
    'text-slate-600 dark:text-slate-200
  `);

  return (
    <BaseView className={containerClasses}>
      <BaseView className={contentClasses}>
        <TextButton
          className={buttonClasses}
          textClassName={buttonTextClasses}
          label={'GLOBAL.BUTTONS.CANCEL'}
          onClick={goBackModal}
        />
        {buttons?.map((button, index) => (
          <Button
            key={index}
            name={`modal.${button.label?.toLowerCase() || 'test-id'}`}
            className={buttonClasses}
            {...button}
          />
        ))}
      </BaseView>
    </BaseView>
  );
};

export default BaseModalFooter;
