import React, { HTMLAttributes } from 'react';
import { Wrapper } from './CommonCenterWrapper.style';

interface CommonCenterWrapperProps extends HTMLAttributes<HTMLDivElement> {}

function CommonCenterWrapper({ ...props }: CommonCenterWrapperProps) {
  return <Wrapper {...props} />;
}

export default CommonCenterWrapper;
