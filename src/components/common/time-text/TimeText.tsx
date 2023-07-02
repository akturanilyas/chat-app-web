import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { TimeTextProps } from './TimeText.interface';

const TimeText: FC<TimeTextProps> = (props) => {
  const { text, options, className } = props;

  const classes = twMerge(`
    text-sm
    text-slate
    dark:text-slate-200
    ${className || ''}
  `);

  return (
    <span {...props} className={classes}>
      {text}
    </span>
  );
};

export default TimeText;
