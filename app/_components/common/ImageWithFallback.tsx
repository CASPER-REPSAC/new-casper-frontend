'use client';

import Image, { ImageProps } from 'next/image';
import { ReactNode, useState } from 'react';

interface Props extends Omit<ImageProps, 'src'> {
  src?: string;
  fallback: ReactNode;
}

function ImageWithFallback({ fallback, src, ...props }: Props) {
  const [imageError, setImageError] = useState(false);

  return (
    <>
      {!src || imageError ? (
        fallback
      ) : (
        <Image src={src} onError={() => setImageError(true)} {...props} />
      )}
    </>
  );
}

export default ImageWithFallback;
