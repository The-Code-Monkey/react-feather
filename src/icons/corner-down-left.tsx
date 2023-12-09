import * as React from 'react';

import { IconProps } from '../types';

const CornerDownLeft = (
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
      <polyline points='9 10 4 15 9 20' />
      <path d='M20 4v7a4 4 0 0 1-4 4H4' />
    </svg>
  );
};

CornerDownLeft.displayName = 'CornerDownLeft';

export default React.forwardRef(CornerDownLeft);
