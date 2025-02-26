import { atom } from 'recoil';
import { FunnelStepType } from '@app/_types/joinTypes';

export const funnelState = atom<FunnelStepType>({
  key: 'funnelState',
  default: 'agree',
});
