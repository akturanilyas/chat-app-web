import * as React from 'react';
import { SVGProps } from 'react';
const SvgUploadCloud = (props: SVGProps<SVGSVGElement>) => (
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
    className="upload-cloud_svg__feather upload-cloud_svg__feather-upload-cloud"
    {...props}
  >
    <path d="m16 16-4-4-4 4M12 12v9" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    <path d="m16 16-4-4-4 4" />
  </svg>
);
export default SvgUploadCloud;
