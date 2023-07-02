import { NavLinkProps } from 'react-router-dom';

export interface BaseNavLinkProps extends NavLinkProps {
  label?: string;
  containerClassName?: string;
  textClassName?: string;
}
