export interface JoinFormData {
  id: string;
  pw: string;
  pwConfirm: string;
  email: string;
  name: string;
  nickname: string;
  profile: FileList;
}

export type StepType = 'email' | 'name' | 'id' | 'password' | 'finish';
