import lodash, { isEmpty } from 'lodash';
import React, { FC, useEffect } from 'react';
import { Controller, Noop } from 'react-hook-form';
import { OnChangeValue, PropsValue } from 'react-select';
import { twMerge } from 'tailwind-merge';
import { SelectProps } from './Select.interface';
import { SelectItemType } from '../../common/base-select/BaseSelect.interface';
import BaseText from '../../common/base-text/BaseText';
import { getInputErrorLabel } from '../../../utils/commonUtils';
import BaseView from '../../common/base-view/BaseView';
import BaseSelect from '../../common/base-select/BaseSelect';

const Select: FC<SelectProps> = (props) => {
  const {
    form,
    name,
    label,
    className,
    disabled,
    errorMessage,
    onChangeValue,
    options,
    isMultiple,
    onBlur,
    isUnmountUnregister = true,
  } = props;

  const classes = twMerge(`
    grow
    mb-4
    flex-1
    ${className || ''}
  `);

  const handleSetValue = (value: string | number | Array<string | number>) => {
    if (isEmpty(value)) {
      return null;
    }

    return (options as Array<SelectItemType>)?.[isMultiple ? 'filter' : 'find'](
      (option) =>
        isMultiple
          ? (value as Array<string | number>)?.includes(option.value)
          : option.value === value,
    ) as PropsValue<SelectItemType>;
  };

  const handleOnChange = (
    value: OnChangeValue<SelectItemType, boolean>,
    onChange: (...event: Array<unknown>) => void,
  ) => {
    onChangeValue && onChangeValue(value);

    onChange(
      isMultiple
        ? (value as Array<SelectItemType>)?.map((option) => option.value)
        : (value as SelectItemType)?.value,
    );
  };

  const handleOnBlur = (_onBlur: Noop) => {
    onBlur && onBlur();
    _onBlur();
  };

  const isError
    = !isEmpty(lodash.get(form.formState.errors, name)) && !isEmpty(errorMessage);

  useEffect(
    () => () => {
      isUnmountUnregister && form.unregister(name);
    },
    [],
  );

  return (
    <BaseView className={classes}>
      <Controller
        control={form.control}
        {...props}
        render={({ field: { onChange, onBlur, value } }) => (
          <BaseSelect
            {...props}
            label={label}
            value={handleSetValue(value)}
            onBlur={() => handleOnBlur(onBlur)}
            onChange={(_value) => handleOnChange(_value, onChange)}
            isDisabled={disabled}
            isError={isError}
          />
        )}
      />
      {isError && (
        <BaseText
          text={getInputErrorLabel({ errorMessage: errorMessage!, form, name })}
          className={'text-error dark:text-error-dark mt-1 text-sm'}
        />
      )}
    </BaseView>
  );
};

export default Select;
