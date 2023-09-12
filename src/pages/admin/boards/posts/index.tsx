import AdminCenterWrapper from '@src/components/common/Layout/AdminCenterWrapper';
import PostTable from '@src/components/templates/admin/boards/posts/PostTable';

function PostListPage() {
  return (
    <AdminCenterWrapper>
      <PostTable />
    </AdminCenterWrapper>
  );
}

export default PostListPage;
