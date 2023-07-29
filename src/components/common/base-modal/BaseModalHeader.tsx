import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { CUSTOM_ICON } from '../../../constants/customIcon.constant';
import useModalDispatcher from '../../../hooks/useModalDispatcher';
import CustomIconProvider from '../../../providers/CustomIconProvider';
import BaseText from '../base-text/BaseText';
import BaseView from '../base-view/BaseView';
import TextButton from '../button/TextButton';
import { BaseModalHeaderProps } from './BaseModalHeader.interface';

const BaseModalHeader: FC<BaseModalHeaderProps> = (props) => {
  const { title, textClassName, icon, isCancellable } = props;
  const { goBackModal } = useModalDispatcher();

  const headerClasses = twMerge(`
    p-4 
    bg-white dark:bg-slate-900
    rounded-t-lg
    border-b
    border-slate-200
    dark:border-slate-700
    flex-row justify-between
  `);

  const titleClasses = twMerge(`
    text-lg
    font-bold
    ${textClassName || ''}
  `);

  return (
    <BaseView className={headerClasses}>
      <BaseView>
        {icon && <CustomIconProvider {...icon} />}
        <BaseText text={title} className={titleClasses} />
      </BaseView>
      {isCancellable && <TextButton onClick={goBackModal} icon={{ icon: CUSTOM_ICON.CLOSE }} />}
    </BaseView>
  );
};

export default BaseModalHeader;
