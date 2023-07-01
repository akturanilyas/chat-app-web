import { InputProps } from './Input.interface';

export interface TextInputProps extends Omit<InputProps, 'type'> {
  type?: string;
}
