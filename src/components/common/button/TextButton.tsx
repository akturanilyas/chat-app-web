import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { TextButtonProps } from './TextButton.interface';
import BaseButton from './BaseButton';

const TextButton: FC<TextButtonProps> = (props) => {
  const classes = twMerge(`
    p-0 rounded-0 justify-start
    bg-transparent
    dark:bg-transparent
    active:bg-transparent
    dark:active:bg-transparent
    disabled:bg-transparent
    dark:disabled:bg-transparent
    ${props.className || ''}
  `);

  const textClasses = twMerge(`
    font-normal
    text-left
    text-slate-600
    dark:text-slate-200
    ${props?.textClassName || ''}
  `);

  return <BaseButton {...props} className={classes} textClassName={textClasses} />;
};

export default TextButton;
