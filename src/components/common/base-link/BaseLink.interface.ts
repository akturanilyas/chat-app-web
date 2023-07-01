import { LinkProps } from 'react-router-dom';

export interface BaseLinkProps extends LinkProps {
  label?: string;
  className?: string;
  textClassName?: string;
}
