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

export type StepType =
  | 'agree'
  | 'email'
  | 'name'
  | 'id'
  | 'password'
  | 'finish';
