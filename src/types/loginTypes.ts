import { MyProfile } from './userTypes';

export interface LoginRequest {
  id: string;
  pw: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  myInfo: MyProfile;
}

export interface AutoLoginResponse {
  accessToken: string;
}
