import * as React from 'react';
import { SVGProps } from 'react';
const SvgChrome = (props: SVGProps<SVGSVGElement>) => (
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
    className="chrome_svg__feather chrome_svg__feather-chrome"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <circle cx={12} cy={12} r={4} />
    <path d="M21.17 8H12M3.95 6.06 8.54 14M10.88 21.94 15.46 14" />
  </svg>
);
export default SvgChrome;
