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

export interface MemberProfile {
  id: string;
  role: 'associate' | 'active' | 'rest' | 'graduate' | 'admin';
  name: string;
  nickname: string;
  email: string;
  introduce: string | null;
  homepage: string | null;
  image: string | null;
}

export interface ProfileImageUpdateRequest {
  profile: File;
}

export interface ProfileUpdateRequset {
  id: string;
  pw?: string;
  email?: string;
  name?: string;
  nickname?: string;
  homepage?: string;
  introduce?: string;
  profileImgPath?: string;
}

export interface ProfileUpdateResponse {
  id: string;
  pw: string;
  email: string;
  name: string;
  nickname: string;
}
