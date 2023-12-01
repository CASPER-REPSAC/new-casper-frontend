import { Variants, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

interface ArticleProps {
  articleId: number;
  title: string;
  view: number;
  nickname: string;
  createdAt: string;
  boardType: string;
}

function Article({
  articleId,
  boardType,
  title,
  view,
  nickname,
  createdAt,
}: ArticleProps) {
  const { prefetch, push } = useRouter();
  const [createDate] = createdAt.split('T');
  const href = `/boards/${boardType}/detail/${articleId}`;

  return (
    <MotionTr onMouseEnter={() => prefetch(href)} onClick={() => push(href)}>
      <SmallTd>{articleId}</SmallTd>
      <LargeTd>{title}</LargeTd>
      <MediumTd>{nickname}</MediumTd>
      <MediumTd>{createDate}</MediumTd>
      <SmallTd>{view}</SmallTd>
    </MotionTr>
  );
}

const trVariants: Variants = {
  hover: (theme: DefaultTheme) => ({
    backgroundColor: theme.boardHover,
  }),
  tap: (theme: DefaultTheme) => ({
    backgroundColor: theme.boardActive,
  }),
};

const Tr = styled.tr`
  height: 2.4em;
  line-height: 2.4em;
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
`;

const MotionTr = styled(motion(Tr)).attrs(({ theme }) => ({
  variants: trVariants,
  whileHover: 'hover',
  whileTap: 'tap',
  custom: theme,
}))`
  cursor: pointer;
`;

const SmallTd = styled.td`
  width: 10%;
  text-align: center;
`;
const MediumTd = styled.td`
  width: 20%;
  text-align: center;
`;
const LargeTd = styled.td`
  width: 19px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Article;
