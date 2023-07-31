import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import BaseView from '../common/base-view/BaseView';
import { LogoProps } from './Logo.interface';
import logo from '../../assets/icons/my-chat-logo.svg';

const Logo: FC<LogoProps> = (props) => {
  const { className, logoClassName } = props;

  const classes = twMerge(`
     flex-row items-center w-64 px-4 justify-center
    ${className || ''}
  `);

  const logoClasses = twMerge(`
     h-auto min-w-[140px]
    ${logoClassName || ''}
  `);

  return (
    <BaseView className={classes}>
      <img src={logo} alt={'logo'} className={logoClasses} />
    </BaseView>
  );
};

export default Logo;
