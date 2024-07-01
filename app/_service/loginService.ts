import Service from './service';

class LoginService extends Service {
  loginGithub({ code, redirectUri }: { code: string; redirectUri: string }) {
    return this.axiosExtend.post('/api/user/github', { code, redirectUri });
  }
}

const loginService = new LoginService();
export default loginService;
