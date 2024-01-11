export interface Profile {
  avatar: FileList;
  name: string;
  introduce: string;
  nickname: string;
  email: string;
  role: 'associate' | 'full' | 'admin';
  homepage: string;
}

export interface MyProfile {
  id: string;
  role: 'associate' | 'active' | 'rest' | 'graduate' | 'admin';
  name: string;
  nickname: string;
  email: string;
  introduce: string;
  homepage: string;
  image: string;
}

export interface ProfileUpdateReq {
  pw: string;
  nickname: string;
  homepage: string;
  introduce: string;
  image: string;
}

export interface ProfileUpdateRes {
  id: string;
  pw: string;
  email: string;
  name: string;
  nickname: string;
}
