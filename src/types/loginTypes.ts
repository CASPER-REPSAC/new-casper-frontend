export interface LoginRequest {
  id: string;
  pw: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface AutoLoginResponse {
  accessToken: string;
}
