import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import BaseView from '../common/base-view/BaseView';
import { LogoProps } from './Logo.interface';

const Logo: FC<LogoProps> = (props) => {
  const { className, logoClassName } = props;

  const classes = twMerge(`
     flex-row items-center w-64 px-4
    ${className || ''}
  `);

  const logoClasses = twMerge(`
     h-auto w-[140px]
    ${logoClassName || ''}
  `);

  return (
    <BaseView className={classes}>
      <img
        src={
          'https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=w600-h300-pc0xffffff-pd'
        }
        alt={'logo'}
        className={logoClasses}
      />
    </BaseView>
  );
};

export default Logo;
