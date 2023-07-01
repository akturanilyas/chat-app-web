import * as React from 'react';
import { SVGProps } from 'react';
const SvgShoppingBag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shopping-bag_svg__feather shopping-bag_svg__feather-shopping-bag"
    {...props}
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);
export default SvgShoppingBag;
