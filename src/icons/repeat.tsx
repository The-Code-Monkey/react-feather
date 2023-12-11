import * as React from 'react';

import { IconProps } from '../types';

const Repeat = React.forwardRef((
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
      <polyline points='17 1 21 5 17 9' />
      <path d='M3 11V9a4 4 0 0 1 4-4h14' />
      <polyline points='7 23 3 19 7 15' />
      <path d='M21 13v2a4 4 0 0 1-4 4H3' />
    </svg>
    );
});
Repeat.displayName = 'Repeat';

export default Repeat
