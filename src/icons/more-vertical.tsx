import * as React from 'react';

import { IconProps } from '../types';

const MoreVertical = React.forwardRef((
  { color = 'currentColor', size = 24, ...rest }: IconProps,
  ref: React.ForwardedRef<SVGSVGElement>
) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...rest}
    >
      <circle cx='12' cy='12' r='1' />
      <circle cx='12' cy='5' r='1' />
      <circle cx='12' cy='19' r='1' />
    </svg>
    );
});
MoreVertical.displayName = 'MoreVertical';

export default MoreVertical
