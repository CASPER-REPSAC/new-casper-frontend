export interface MemberProfile {
  id: number;
  role: string;
  name: string;
  nickname: string;
  email: string;
  introduce: string | null;
  homepage: string | null;
  image: string | null;
}
