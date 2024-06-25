import { ProfileUpdateRequset } from '@app/_types/userTypes';
import Service from './service';

class UserService extends Service {
  updateProfile(data: ProfileUpdateRequset) {
    return this.axiosExtend.post('/api/user/update', data);
  }
}

const userService = new UserService();
export default userService;
