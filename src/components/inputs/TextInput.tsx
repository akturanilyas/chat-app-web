import React, { FC, ForwardedRef, forwardRef } from 'react';
import Input from './Input';
import { TextInputProps } from './TextInput.interface';
import { InputType } from '../../enums/common.enum';

const TextInput: FC<TextInputProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLInputElement>) => (
    <Input {...props} type={InputType.TEXT} ref={ref} />
  ),
);

export default TextInput;
