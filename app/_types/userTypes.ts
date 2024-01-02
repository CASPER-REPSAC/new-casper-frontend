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
  role: 'associate' | 'full' | 'admin';
  name: string;
  nickname: string;
  email: string;
  introduce: string;
  homepage: string;
  image: string;
}
