import { styled } from 'styled-components';
import { useRouter } from 'next/router';
import {
  CircleButton,
  LeftButton,
  RightButton,
} from '@src/components/common/featureTag';
import SCREEN_SIZE from '@src/constants/screenWidth';
import { ICON_SIZE } from '@src/constants/size';
import { usePagination, useWindowSize } from '@src/hooks';

interface Props {
  maxPage: number;
  curPage: number;
}

function BoardFooter({ maxPage, curPage }: Props) {
  const { query, push, prefetch } = useRouter();
  const { width } = useWindowSize();

  const fullPageList = Array.from({ length: maxPage }, (_, idx) => idx + 1);
  const pageInteval = width < SCREEN_SIZE.mobile ? 5 : 10;

  const footerMaxPage = Math.ceil(maxPage / pageInteval);
  const {
    page: footerPage,
    setNextPage,
    setPrevPage,
  } = usePagination(footerMaxPage);
  const start = footerPage * pageInteval;
  const pageList = fullPageList.slice(start, start + pageInteval);

  console.log(footerPage, maxPage);

  return (
    <TableFooter>
      <LeftButton size={ICON_SIZE.medium} onClick={setPrevPage} />
      <PageButtonSection>
        {pageList.map((page) => {
          const href = `/boards/${query.boardType}/list/${page}`;
          const onClick = () =>
            push(href, undefined, {
              scroll: false,
            });
          const onMouseEnter = () => prefetch(href);
          return (
            <CircleButton
              key={page}
              $size="small"
              onMouseEnter={onMouseEnter}
              onClick={onClick}
              $highlight={page === curPage}
            >
              {page}
            </CircleButton>
          );
        })}
      </PageButtonSection>
      <RightButton size={ICON_SIZE.medium} onClick={setNextPage} />
    </TableFooter>
  );
}

const TableFooter = styled.div`
  margin-top: 1rem;
  position: relative;
  display: flex;
  width: 100%;
  max-width: 700px;
  justify-content: space-between;
`;

const PageButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  @media screen and (max-width: 1024px) {
    gap: 10px;
  }
`;

export default BoardFooter;
