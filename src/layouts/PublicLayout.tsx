import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import BaseView from '../components/common/base-view/BaseView';
import { PublicLayoutProps } from './PublicLayout.interface';

const PublicLayout: FC<PublicLayoutProps> = (props) => {
  const { className, children } = props;

  const classes = twMerge(`
    ${className || ''}
  `);

  return <BaseView className={classes}>{children}</BaseView>;
};

export default PublicLayout;
