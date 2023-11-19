import DetailComment from '@src/components/organism/DetailComment';
import DetailContent from '@src/components/organism/DetailContent';
import { ArticleDetail } from '@src/types/articleTypes';
import styled from 'styled-components';

interface Props {
  articleDetail: ArticleDetail;
}

function DetailTemplate({ articleDetail }: Props) {
  return (
    <>
      <DetailContent articleDetail={articleDetail} />
      <Hr />
      <DetailComment />
    </>
  );
}
const Hr = styled.hr`
  background: ${({ theme }) => theme.borderDefault};
  border: 0;
  width: 100%;
  height: 1px;
  margin-top: 50px;
  margin-bottom: 50px;
`;
export default DetailTemplate;
