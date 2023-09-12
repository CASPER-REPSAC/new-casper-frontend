import AdminCenterWrapper from '@src/components/common/Layout/AdminCenterWrapper';
import PostTable from '@src/components/pages/admin/boards/posts/PostTable';

function PostListPage() {
  return (
    <AdminCenterWrapper>
      <PostTable />
    </AdminCenterWrapper>
  );
}

export default PostListPage;
