'use client';

import { memo } from 'react';
import AutoLogin from './AutoLogin';
import ExtendLogin from './ExtendLogin';

function AutoLoginPresence() {
  return (
    <>
      <ExtendLogin />
      <AutoLogin />
    </>
  );
}

export default memo(AutoLoginPresence);
