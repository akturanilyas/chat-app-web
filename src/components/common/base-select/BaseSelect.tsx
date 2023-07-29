import React, { FC } from 'react';
import ReactSelect from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
import { twMerge } from 'tailwind-merge';
import { translate } from '../../../utils/translateUtil';
import BaseLabel from '../base-label/BaseLabel';
import BaseText from '../base-text/BaseText';
import BaseView from '../base-view/BaseView';
import TextButton from '../button/TextButton';
import { BaseSelectProps } from './BaseSelect.interface';

const BaseSelect: FC<BaseSelectProps> = (props) => {
  const {
    label,
    name,
    options,
    rules,
    labelClassName,
    placeholder,
    isMultiple,
    accessories,
    selectCore = 'reactSelect',
    createLabel,
    isError,
    controlClassName,
    indicatorsContainerClassName,
    dropdownIndicatorClassName,
    noOptionActionButton,
    noOptionsMessage,
    ...restProps
  } = props;

  const controlClasses = twMerge(`
    ${controlClassName || ''}
  `);

  const indicatorsContainerClasses = twMerge(`
    ${indicatorsContainerClassName || ''}
  `);

  const dropdownIndicatorClasses = twMerge(`
    ${dropdownIndicatorClassName || ''}
  `);

  const labelClasses = twMerge(`
    font-medium
    mb-1.5
    text-sm
    ${labelClassName || ''}
  `);

  const accessoryButtonTextClasses = twMerge(`
    ${labelClasses || ''}
    text-primary
  `);

  const isRequired = () => rules && JSON.stringify(rules).includes('"required":true');

  const _selectCore = {
    reactSelect: ReactSelect,
    creatableSelect: CreatableSelect,
  };

  const formatCreateLabel = (value: string) =>
    `${translate({ value: createLabel?.prefix || '' })} "${value}" ${translate({
      value: createLabel?.suffix || '',
    })}`;

  const NoOptionsMessage = () => (
    <BaseView className={'flex-row w-full justify-center'}>
      {noOptionActionButton ? (
        <TextButton
          {...noOptionActionButton}
          className={twMerge(`
              py-3 justify-center 
              hover:bg-[rgba(0,0,0,0.07)] dark:hover:bg-[rgba(0,0,0,0.07)]
               ${noOptionActionButton.className || ''}
             `)}
        />
      ) : (
        <BaseText
          text={noOptionsMessage || 'GLOBAL.FORM_ELEMENTS.LABELS.NO_OPTIONS'}
          className={'py-3 text-slate-500 dark:text-slate-400'}
        />
      )}
    </BaseView>
  );

  return (
    <BaseView data-testid={`input.${name || 'select'}`}>
      {label && (
        <BaseView className={'flex-row justify-between'}>
          <BaseLabel name={name} text={label} htmlFor={name} isRequired={isRequired()} className={labelClasses} />
          <BaseView className={'flex-row gap-1'}>
            {accessories?.map((item, index) => {
              if (item.render) {
                return <BaseView key={index}>{item.render}</BaseView>;
              }

              return (
                <TextButton
                  key={index}
                  onClick={item.onClick}
                  label={item.label}
                  icon={item.icon}
                  name={item.name}
                  textClassName={accessoryButtonTextClasses}
                />
              );
            })}
          </BaseView>
        </BaseView>
      )}
      {React.createElement(_selectCore[selectCore], {
        ...(restProps as StateManagerProps),
        'aria-label': `input.${name || 'select'}`,
        name,
        inputId: name,
        options,
        className: `react-select-container ${isError ? 'react-select-container--error' : ''}`,
        classNamePrefix: 'react-select',
        classNames: {
          control: () => controlClasses,
          indicatorsContainer: () => indicatorsContainerClasses,
          dropdownIndicator: () => dropdownIndicatorClasses,
        },
        placeholder: translate({ value: placeholder || '' }),
        isMulti: isMultiple,
        menuPlacement: 'auto',
        formatCreateLabel,
        components: { NoOptionsMessage },
      })}
    </BaseView>
  );
};

export default BaseSelect;
