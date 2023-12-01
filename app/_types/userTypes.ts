export interface Profile {
  avatar: string;
  name: string;
  introduce: string;
  nickname: string;
  email: string;
  role: '준회원' | '정회원' | '관리자';
  homepage: string;
}

export interface MyProfile {
  id: string;
  role: '준회원' | '정회원' | '관리자';
  name: string;
  nickname: string;
  email: string;
  introduce: string;
  homepage: string;
  image: string;
}
