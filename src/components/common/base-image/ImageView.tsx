import React, { FC } from 'react';
import BaseView from '../base-view/BaseView';
import { twMerge } from 'tailwind-merge';
import { ImageViewProps } from './ImageView.interface';

const ImageView: FC<ImageViewProps> = (props) => {
  const { className, imageClassName, image } = props;

  const classes = twMerge(`
    ${className || ''}
  `);

  const imageClasses = twMerge(`
    ${imageClassName || ''}
  `);

  return (
    <BaseView className={classes}>
      <img className={imageClasses} src={image} alt={image || ''} />
    </BaseView>
  );
};

export default ImageView;
