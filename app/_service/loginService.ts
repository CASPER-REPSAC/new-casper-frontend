import Service from './service';

class LoginService extends Service {
  loginGithub({ code, redirectUri }: { code: string; redirectUri: string }) {
    return this.axiosExtend.post('/api/user/github', { code, redirectUri });
  }

  async updatePassword(newPassword: string) {
    const { data } = await this.axiosExtend.post('/api/user/pwupdate', {
      pw: newPassword,
    });
    return data;
  }
}

const loginService = new LoginService();
export default loginService;
