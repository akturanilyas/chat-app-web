import React, { FC } from 'react';
import Input from './Input';
import { TextInputProps } from './TextInput.interface';
import { InputType } from '../../enums/common.enum';

const TextInput: FC<TextInputProps> = (props) => <Input {...props} type={InputType.TEXT} />;

export default TextInput;
