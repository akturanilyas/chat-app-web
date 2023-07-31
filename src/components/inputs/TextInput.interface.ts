import { InputProps } from './Input.interface';
import { ForwardedRef } from 'react';
import { InputType } from '../../enums/common.enum';

export interface TextInputProps extends Omit<InputProps, 'type'> {
  type?: InputType;
  ref?: ForwardedRef<HTMLInputElement>;
}
