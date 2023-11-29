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
  const pageInteval = width < SCREEN_SIZE.mobile ? 5 : 10;
  const footerMaxPage = Math.ceil(maxPage / pageInteval);
  const { page: footerPage, paginate } = usePagination(footerMaxPage);
  const start = footerPage * pageInteval;
  const fullPageList = Array.from({ length: maxPage }, (_, idx) => idx + 1);
  const pageList = fullPageList.slice(start, start + pageInteval);

  return (
    <TableFooter>
      <LeftButton size={ICON_SIZE.medium} onClick={() => paginate(-1)} />
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
      <RightButton size={ICON_SIZE.medium} onClick={() => paginate(1)} />
    </TableFooter>
  );
}

const TableFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 250px;

  @media screen and (min-width: ${`${SCREEN_SIZE.mobile}px`}) {
    width: 500px;
  }
  @media screen and (min-width: ${`${SCREEN_SIZE.tablet}px`}) {
    width: 600px;
  }
  @media screen and (min-width: ${`${SCREEN_SIZE.desktop}px`}) {
    width: 600px;
  }
`;

export default BoardFooter;
