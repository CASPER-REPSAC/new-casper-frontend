export interface JoinFormData {
  id: string;
  pw: string;
  pwConfirm: string;
  email: string;
  name: string;
  nickname: string;
  profile: FileList;
  agree: boolean;
}

export interface JoinRequest {
  id: string;
  pw: string;
  email: string;
  name: string;
  nickname: string;
}

export interface JoinResponse {
  id: string;
  pw: string;
  email: string;
  name: string;
  nickname: string;
}

export type FunnelStepType =
  | 'agree'
  | 'email'
  | 'name'
  | 'id'
  | 'password'
  | 'finish';
