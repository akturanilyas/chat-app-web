import { ReactElement, SVGProps } from 'react';

export interface ISideMenuItem {
  title: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  groups?: Array<string>;
  isExpand?: boolean;
  target: string;
  nestedMenu?: Array<Omit<ISideMenuItem, 'nestedMenu' | 'icon'>>;
}

const SideMenuItems: Array<ISideMenuItem> = [];

export default SideMenuItems;
