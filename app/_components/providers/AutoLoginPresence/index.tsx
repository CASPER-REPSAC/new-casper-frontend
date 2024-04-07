'use client';

import { memo } from 'react';
import ExtendLogin from './ExtendLogin';
import AutoLogin from './AutoLogin';

function AutoLoginPresence() {
  return (
    <>
      <ExtendLogin />
      <AutoLogin />
    </>
  );
}

export default memo(AutoLoginPresence);
