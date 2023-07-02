import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { translate } from '../../../utils/translateUtil';
import { TextProps } from './BaseText.interface';

const BaseText: FC<TextProps> = (props) => {
  const { text, options, className } = props;

  const classes = twMerge(`
    text-slate
    dark:text-slate-200
    ${className || ''}
  `);

  console.log(translate({ value: text, options }) || text);

  return (
    <span {...props} className={classes}>
      {translate({ value: text, options }) || text}
    </span>
  );
};

export default BaseText;
