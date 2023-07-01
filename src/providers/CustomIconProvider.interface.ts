import { FC } from 'react';

export interface CustomIconProviderProps {
  className?: string;
  iconClassName?: string;
  icon: string | FC<IconComponent>;
  customSize?: number;
  color?: string;
  name?: string;
}

export interface IconComponent {
  width: number;
  height: number;
  color: string;
  className?: string;
}
