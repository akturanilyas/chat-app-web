import React, { FC, ForwardedRef, forwardRef } from 'react';
import Input from './Input';
import { TextInputProps } from './TextInput.interface';
import { InputType } from '../../enums/common.enum';

const TextInput: FC<TextInputProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLInputElement>) => (
    <Input type={InputType.TEXT} {...props} ref={ref} />
  ),
);

export default TextInput;
