import { ReactElement } from 'react';
import { CustomIconProviderProps } from '../providers/CustomIconProvider.interface';

export interface BaseModalHeaderProps {
  title: string;
  textClassName?: string;
  icon?: CustomIconProviderProps;
  isCancellable?: boolean;
}

export interface ModalLayoutProps {
  header: BaseModalHeaderProps;
  footer: {
    buttons: Array<{
      label?: string;
      className?: string;
      textClassName?: string;
      disabled?: boolean;
      icon?: CustomIconProviderProps;
      onClick: () => void;
    }>;
  };
  children: ReactElement;
  isCancellable?: boolean;
  isOutsideClick?: boolean;
  modalContainerClassName?: string;
}
