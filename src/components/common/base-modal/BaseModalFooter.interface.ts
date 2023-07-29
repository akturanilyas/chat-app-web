import { CustomIconProviderProps } from '../../../providers/CustomIconProvider.interface';

export interface BaseModalFooterButtons {
  label?: string;
  className?: string;
  textClassName?: string;
  disabled?: boolean;
  icon?: CustomIconProviderProps;
  onClick: () => void;
}

export interface BaseModalFooterProps {
  buttons?: Array<BaseModalFooterButtons>;
}
