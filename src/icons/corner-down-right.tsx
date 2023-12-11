import * as React from 'react';

import { IconProps } from '../types';

const CornerDownRight = React.forwardRef((
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
      <polyline points='15 10 20 15 15 20' />
      <path d='M4 4v7a4 4 0 0 0 4 4h12' />
    </svg>
    );
});
CornerDownRight.displayName = 'CornerDownRight';

export default CornerDownRight
