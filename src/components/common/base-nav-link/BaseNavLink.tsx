import React, { FC } from 'react';
import { NavLink as RRDNavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import BaseText from '../base-text/BaseText';
import BaseView from '../base-view/BaseView';
import { BaseNavLinkProps } from './BaseNavLink.interface';

const BaseLink: FC<BaseNavLinkProps> = (props) => {
  const { label, containerClassName, textClassName } = props;

  const classes = twMerge(`
    ${containerClassName || ''}
  `);

  const textClasses = twMerge(`
    ${textClassName || ''}
  `);

  return (
    <RRDNavLink {...props}>
      <BaseView className={classes}>
        <>
          {label && <BaseText text={label} className={textClasses} />}
          {!label && props.children}
        </>
      </BaseView>
    </RRDNavLink>
  );
};

export default BaseLink;
