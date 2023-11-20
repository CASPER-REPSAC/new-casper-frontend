import CommonCenterWrapper from '@src/components/common/centerWrapper/CommonCenterWrapper';
import PostForm from '@src/components/templates/boards/PostTemplate';

/**
 *  글 작성 페이지
 */

function PostPage() {
  return (
    <CommonCenterWrapper>
      <PostForm />
    </CommonCenterWrapper>
  );
}

export default PostPage;
