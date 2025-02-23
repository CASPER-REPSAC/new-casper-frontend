import Service from './service';

class LoginService extends Service {
  loginGithub({ code, redirectUri }: { code: string; redirectUri: string }) {
    return this.axiosExtend.post('/api/user/github', { code, redirectUri });
  }

  loginCasper({ code, redirectUri }: { code: string; redirectUri: string }) {
    return this.axiosExtend.post('/api/user/sso', { code, redirectUri });
  }

  async updatePassword(newPassword: string) {
    const { data } = await this.axiosExtend.post(
      `/api/user/pwupdate?pw=${newPassword}`,
    );
    return data;
  }

  async findPassword(email: string) {
    const { data } = await this.axiosExtend.post('/api/user/findpw', {
      email,
    });
    return data;
  }

  async findId(email: string) {
    const { data } = await this.axiosExtend.post('/api/user/findid', {
      email,
    });
    return data;
  }
}

const loginService = new LoginService();
export default loginService;
