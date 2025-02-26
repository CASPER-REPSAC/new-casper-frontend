import { atom } from 'jotai';
import { Role } from '@app/_types/userTypes';

export const roleState = atom<Role | 'guest'>('guest');
