'use client';

import Image, { ImageProps } from 'next/image';
import { ReactNode, useState } from 'react';

interface Props extends ImageProps {
  fallback: ReactNode;
}

function ImageWithFallback({ fallback, ...props }: Props) {
  const [imageError, setImageError] = useState(false);

  return (
    <>
      {imageError ? (
        fallback
      ) : (
        <Image onError={() => setImageError(true)} {...props} />
      )}
    </>
  );
}

export default ImageWithFallback;
