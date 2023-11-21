import useArticleDetail from '@src/hooks/apis/boards/useArticleDetail';
import styled from 'styled-components';

interface Props {
  articleId: string;
}

function TitleSection({ articleId }: Props) {
  const { data } = useArticleDetail(articleId);

  return <Title>{data?.title}</Title>;
}

const Title = styled.h1`
  font-size: 5rem;
  flex-grow: 0;
  word-break: break-all;
`;

export default TitleSection;
