import * as React from 'react';
import { SVGProps } from 'react';
const SvgSquare = (props: SVGProps<SVGSVGElement>) => (
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
    className="square_svg__feather square_svg__feather-square"
    {...props}
  >
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
  </svg>
);
export default SvgSquare;
