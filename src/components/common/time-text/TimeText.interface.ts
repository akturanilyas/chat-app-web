import { HTMLProps } from 'react';

export interface TimeTextProps extends HTMLProps<HTMLDivElement> {
  text: string;
  options?: Record<string, unknown>;
}
