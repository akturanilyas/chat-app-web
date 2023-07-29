import { InputProps } from './Input.interface';
import { ForwardedRef } from 'react';

export interface TextInputProps extends Omit<InputProps, 'type'> {
  type?: string;
  ref?: ForwardedRef<HTMLInputElement>;
}
