import * as React from 'react';

import { IconProps } from '../types';

const ChevronsRight = React.forwardRef((
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
      <polyline points='13 17 18 12 13 7' />
      <polyline points='6 17 11 12 6 7' />
    </svg>
    );
});
ChevronsRight.displayName = 'ChevronsRight';

export default ChevronsRight
