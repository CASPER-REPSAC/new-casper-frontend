import { atom } from 'jotai';
import { FunnelStepType } from '@app/_types/joinTypes';

export const funnelState = atom<FunnelStepType>('agree');
