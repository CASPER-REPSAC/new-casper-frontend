export type Role = 'associate' | 'active' | 'rest' | 'graduate' | 'admin';

export interface MyProfile {
  id: string;
  role: Role;
  name: string;
  nickname: string;
  email: string;
  introduce: string;
  homepage: string;
  image: string;
}

export interface MemberProfile {
  id: string;
  role: Role;
  name: string;
  nickname: string;
  email: string;
  introduce: string | null;
  homepage: string | null;
  image: string | null;
}

export interface ProfileImageUploadRequest {
  profile: File;
  userModifyDto: {
    nickname: string;
    homepage: string;
    introduce: string;
    profileImgPath: string;
  };
}

export interface ProfileUpdateRequset {
  introduce: string;
  name: string;
  nickname: string;
  homepage: string;
  profileImgPath: string;
}

export interface ProfileUpdateForm {
  profileImg: FileList;
  profileImgPath: string;
  introduce: string;
  name: string;
  nickname: string;
  role: Role | '';
  homepage: string;
  email: string;
}

export interface ProfileUpdateResponse {
  id: string;
  pw: string;
  email: string;
  name: string;
  nickname: string;
}
