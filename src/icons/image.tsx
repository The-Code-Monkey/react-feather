import * as React from 'react';

import { IconProps } from '../types';

const Image = React.forwardRef((
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
      <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
      <circle cx='8.5' cy='8.5' r='1.5' />
      <polyline points='21 15 16 10 5 21' />
    </svg>
    );
});
Image.displayName = 'Image';

export default Image
