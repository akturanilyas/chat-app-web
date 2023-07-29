import { FocusEventHandler, KeyboardEventHandler, ReactElement } from 'react';
import { GroupBase, InputActionMeta, OnChangeValue, OptionsOrGroups, PropsValue } from 'react-select';
import { FilterOptionOption } from 'react-select/dist/declarations/src/filters';
import { CustomIconProviderProps } from '../../../providers/CustomIconProvider.interface';
import { ButtonProps } from '../button/Button.interface';
import { FormRules } from '../../inputs/Input.interface';
import { SelectCore } from '../../../enums/common.enum';

export interface SelectAccessoryItem {
  label?: string;
  onClick?: () => void;
  name?: string;
  icon?: CustomIconProviderProps;
  render?: ReactElement;
}

export interface SelectItemType {
  label: string;
  value: string | number;
  raw?: Record<string, unknown>;
}

export interface BaseSelectProps {
  label?: string;
  name?: string;
  value?: PropsValue<SelectItemType>;
  inputValue?: string;
  rules?: FormRules;
  labelClassName?: string;
  options?: OptionsOrGroups<SelectItemType, GroupBase<SelectItemType>> | undefined;
  placeholder?: string;
  defaultValue?: PropsValue<SelectItemType> | undefined;
  onChange: (value: OnChangeValue<SelectItemType, boolean>) => void;
  onBlur?: () => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  noOptionsMessage?: string;
  isMultiple?: boolean;
  isDisabled?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  isLoading?: boolean;
  inputId?: string;
  accessories?: Array<SelectAccessoryItem>;
  filterOption?: ((option: FilterOptionOption<SelectItemType>, inputValue: string) => boolean) | null;
  selectCore?: SelectCore;
  createLabel?: {
    prefix?: string;
    suffix?: string;
  };
  isError?: boolean;
  controlClassName?: string;
  indicatorsContainerClassName?: string;
  dropdownIndicatorClassName?: string;
  noOptionActionButton?: ButtonProps;
}
