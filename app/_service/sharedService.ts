import Service from './service';

class SharedService extends Service {
  async uploadFile({ type, files }: { type: string; files: FileList }) {
    const formData = new FormData();

    Array.from(files).forEach((file) => {
      formData.append('files', file);
    });

    const { data } = await this.axiosExtend.postForm<
      {
        name: string;
        url: string;
      }[]
    >(`/api/file/upload?type=${type}`, formData);

    return data;
  }
}

const sharedService = new SharedService();
export default sharedService;
