import React, { FC } from 'react';
import { BaseImageProps } from './BaseImage.interface';

const BaseImage: FC<BaseImageProps> = ({ src, alt, className, width, height, name }) => (
  <img
    src={src}
    className={className}
    alt={alt}
    width={width}
    height={height}
    data-testid={`image.${name || 'test-id'}`}
  />
);

export default BaseImage;
