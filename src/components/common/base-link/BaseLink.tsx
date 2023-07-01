import React, { FC } from 'react';
import { Link as RRDLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import BaseText from '../base-text/BaseText';
import BaseView from '../base-view/BaseView';
import { BaseLinkProps } from './BaseLink.interface';

const BaseLink: FC<BaseLinkProps> = (props) => {
  const { label, className, textClassName, ...restProps } = props;

  const classes = twMerge(`
    ${className || ''}
  `);

  const textClasses = twMerge(`
    ${textClassName || ''}
  `);

  return (
    <BaseView className={classes}>
      <RRDLink {...restProps}>
        {label && <BaseText text={label} className={textClasses} />}
        {!label && props.children}
      </RRDLink>
    </BaseView>
  );
};

export default BaseLink;
