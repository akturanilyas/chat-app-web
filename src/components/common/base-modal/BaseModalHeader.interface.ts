import { CustomIconProviderProps } from '../../../providers/CustomIconProvider.interface';

export interface BaseModalHeaderProps {
  title: string;
  textClassName?: string;
  icon?: CustomIconProviderProps;
  isCancellable?: boolean;
}
