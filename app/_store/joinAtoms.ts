import { FunnelStepType } from '@app/_types/joinTypes';
import { atom } from 'recoil';

export const funnelState = atom<FunnelStepType>({
  key: 'funnelState',
  default: 'agree',
});
