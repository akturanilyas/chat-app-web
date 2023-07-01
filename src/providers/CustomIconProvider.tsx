import React, { FC } from 'react';
import BaseView from '../components/common/base-view/BaseView';
import { twMerge } from 'tailwind-merge';
import { CustomIconProviderProps } from './CustomIconProvider.interface';

const CustomIconProvider: FC<CustomIconProviderProps> = (props) => {
  const { icon, color, customSize, className, name, iconClassName } = props;

  const classes = twMerge(`
    ${className || ''}
  `);

  return (
    <BaseView className={classes} data-testid={`icon.${name || 'default'}`}>
      {React.createElement(icon, {
        width: customSize || 24,
        height: customSize || 24,
        color: (color || 'slate.600'),
        className: iconClassName,
      })}
    </BaseView>
  );
};

export default CustomIconProvider;
