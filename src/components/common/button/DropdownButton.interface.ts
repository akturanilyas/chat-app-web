import { ReactElement } from 'react';
import { CustomIconProviderProps } from '../../../providers/CustomIconProvider.interface';

export interface DropdownItem {
  label?: string;
  onClick?: () => void;
  icon?: CustomIconProviderProps;
  render?: ReactElement;
}

export interface DropdownButtonProps {
  label?: string;
  name?: string;
  dropdownItems: Array<DropdownItem>;
  icon?: CustomIconProviderProps;
  className?: string;
  buttonClassProps?: {
    className?: string;
    textClassName?: string;
    arrowClassName?: string;
    arrowIconClassName?: string;
  };
  toggleMenuContainerClassName?: string;
  menuContainerClassName?: string;
  itemClassName?: string;
  isClickAndClose?: boolean;
  withArrowIcon?: boolean;
  tooltip?: string;
  tooltipClassName?: string;
  disabled?: boolean;
}
