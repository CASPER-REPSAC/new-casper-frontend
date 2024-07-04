import { cache } from 'react';
import { MemberProfile, ProfileUpdateRequset } from '@app/_types/userTypes';
import Service from './service';

class UserService extends Service {
  updateProfile(data: ProfileUpdateRequset) {
    return this.axiosExtend.post('/api/user/update', data);
  }

  async getAllMember(role: string) {
    const { data } = await this.axiosExtend.get<{
      memberList: MemberProfile[];
    }>(`/api/user/showall?role=${role}`);
    return data;
  }
}

const userService = new UserService();

userService.getAllMember = cache(userService.getAllMember.bind(userService));

export default userService;
