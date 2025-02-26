'use client';

import Image, { ImageProps } from 'next/image';
import { ReactNode, useState } from 'react';
import { cn } from '@app/_shadcn/lib/utils';

export interface AvatarProps extends Omit<ImageProps, 'src'> {
  src?: string;
  fallback: ReactNode;
  rounded: boolean;
}

function Avatar({ fallback, rounded, src, className, ...props }: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={cn(
        'flex-center relative size-10 cursor-pointer overflow-hidden bg-secondary',
        rounded ? 'rounded-full' : 'rounded',
        className,
      )}
    >
      {!src || imageError ? (
        fallback
      ) : (
        <Image
          src={src}
          onError={() => setImageError(true)}
          className="object-cover"
          fill
          sizes="100%"
          {...props}
          alt={props.alt || 'avatar'}
        />
      )}
    </div>
  );
}

export default Avatar;
