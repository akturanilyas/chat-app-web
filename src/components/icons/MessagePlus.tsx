import * as React from 'react';
import { SVGProps } from 'react';
const MessagePlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="message-plus_svg__icon message-plus_svg__icon-tabler message-plus_svg__icon-tabler-message-plus"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#2c3e50"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M8 9h8M8 13h6M12.01 18.594 8 21v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5.5M16 19h6M19 16v6" />
  </svg>
);
export default MessagePlus;
