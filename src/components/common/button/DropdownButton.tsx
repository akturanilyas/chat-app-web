import React, { FC, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { CUSTOM_ICON } from '../../../constants/customIcon.constant';
import BaseView from '../base-view/BaseView';
import Button from './Button';
import { DropdownButtonProps } from './DropdownButton.interface';
import TextButton from './TextButton';

const DropdownButton: FC<DropdownButtonProps> = (props) => {
  const {
    label,
    name,
    dropdownItems,
    buttonClassProps,
    className,
    toggleMenuContainerClassName,
    menuContainerClassName,
    itemClassName,
    icon,
    tooltip,
    tooltipClassName,
    withArrowIcon = true,
    isClickAndClose = true,
    disabled,
  } = props;
  const [toggle, setToggle] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const classes = twMerge(`
    ${className || ''}
  `);

  const toggleMenuContainerClasses = twMerge(`
    absolute 
    top-0 
    right-0 
    w-full 
    min-w-[200px] 
    max-h-[350px] 
    overflow-auto 
    no-scrollbar 
    z-10
    ${toggleMenuContainerClassName || ''}
  `);

  const toggleMenuClasses = twMerge(`
    z-10
    bg-slate-100 dark:bg-slate-700
    border border-slate-200 dark:border-slate-800
    w-full rounded-lg mt-1
    ${menuContainerClassName || ''}
  `);

  const buttonClasses = twMerge(`
    justify-start
    disabled:bg-transparent
    disabled:dark:bg-transparent
    ${buttonClassProps?.className || ''}
  `);

  const buttonTextClasses = twMerge(`
    ${disabled ? '!text-slate-400 !dark:text-slate-700' : ''}
    ${buttonClassProps?.textClassName || ''}
  `);

  const itemClasses = twMerge(`
    px-4 py-2.5 w-full
    hover:bg-[rgba(0,0,0,0.05)]
    dark:hover:bg-[rgba(0,0,0,0.05)]
    ${itemClassName || ''}
  `);

  const handleDropdown = () => setToggle(!toggle);

  const handleItemClick = (action?: () => void) => {
    action && action();
    setTimeout(() => {
      isClickAndClose && setToggle(false);
    }, 10);
  };

  const handleOutsideClick = (e: Event) => {
    !disabled && setToggle((ref.current && e.composedPath().includes(ref.current)) || false);
  };

  useEffect(() => {
    !disabled && document.addEventListener('click', handleOutsideClick);

    return () => {
      !disabled && document.removeEventListener('click', handleOutsideClick);
    };
  }, [disabled]);

  return (
    <BaseView className={classes} data-testid={`dropdown.${name || 'parent'}`} ref={ref}>
      <BaseView className={'flex-1'}>
        {(label || icon) && (
          <Button
            label={label}
            onClick={handleDropdown}
            className={buttonClasses}
            textClassName={buttonTextClasses}
            icon={icon}
            tooltip={tooltip}
            tooltipClassName={tooltipClassName}
            disabled={disabled}
            suffixIcon={
              (withArrowIcon
                && !disabled && {
                  name: `dropdown.arrow.${name || 'test-id'}`,
                  icon: CUSTOM_ICON[toggle ? 'CHEVRON_UP' : 'CHEVRON_DOWN'],
                  customSize: 18,
                  className: twMerge(`${buttonClassProps?.arrowClassName}`),
                  iconClassName: twMerge(`text-slate-100 ${buttonClassProps?.arrowIconClassName}`),
                })
              || undefined
            }
          />
        )}
      </BaseView>
      {toggle && (
        <BaseView className={'relative w-full'}>
          <BaseView className={toggleMenuContainerClasses}>
            <ul className={toggleMenuClasses}>
              {dropdownItems.map((item, index) => (
                <li key={index}>
                  {item.render ? (
                    <BaseView onClick={() => handleItemClick(item?.onClick)}>{item.render}</BaseView>
                  ) : (
                    <TextButton
                      label={item.label}
                      onClick={() => handleItemClick(item?.onClick)}
                      className={itemClasses}
                      icon={item.icon}
                    />
                  )}
                </li>
              ))}
            </ul>
          </BaseView>
        </BaseView>
      )}
    </BaseView>
  );
};

export default DropdownButton;
