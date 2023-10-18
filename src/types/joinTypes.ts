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

export interface JoinReqData {
  id: string;
  pw: string;
  email: string;
  name: string;
  nickname: string;
}

export interface JoinResData {
  id: string;
  pw: string;
  email: string;
  name: string;
  nickname: string;
}

export type StepType =
  | 'agree'
  | 'email'
  | 'name'
  | 'id'
  | 'password'
  | 'finish';
