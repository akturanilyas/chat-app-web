import { UseFormReturn } from 'react-hook-form';
import { OnChangeValue } from 'react-select';
import { BaseSelectProps, SelectAccessoryItem, SelectItemType } from './BaseSelect.interface';
import { ErrorMessagesRules, FormRules } from './Input.interface';

export interface SelectProps extends Omit<BaseSelectProps, 'onChange' | 'isDisabled'> {
  form: UseFormReturn;
  label?: string;
  name: `${string}`;
  defaultValue?: SelectItemType;
  rules?: FormRules;
  errorMessage?: ErrorMessagesRules;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  disabled?: boolean;
  onChangeValue?: (value: OnChangeValue<SelectItemType, boolean>) => void;
  isUnmountUnregister?: boolean;
  accessories?: Array<SelectAccessoryItem>;
}
