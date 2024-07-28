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

  async getMember(id: string) {
    const { data } = await this.axiosExtend.get<MemberProfile>(
      `/api/user/show?id=${id}`,
    );
    return data;
  }

  async sendEmailKey(email: string) {
    const { data } = await this.axiosExtend.post(
      `/api/mail/send?email=${email}`,
    );
    return data;
  }

  async withdrawal(userId: string) {
    const { data } = await this.axiosExtend.delete(
      `/api/user/withdrawal/${userId}`,
    );
    return data;
  }
}

const userService = new UserService();

userService.getAllMember = cache(userService.getAllMember.bind(userService));

export default userService;
