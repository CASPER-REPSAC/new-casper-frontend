import { LeftArrowIcon, RightArrowIcon } from '@src/components/common/Icons';
import { ICON_SIZE } from '@src/constants/size';
import { styled } from 'styled-components';

interface Props {
  page: number;
  setPage: {
    setNextPage: () => void;
    setPrevPage: () => void;
  };
  maxPage: number;
}

function PageInfoSection({ page, setPage, maxPage }: Props) {
  const PageBar = [];
  for (let i = 0; i < maxPage; i += 1) {
    PageBar.push(
      <CurPageBar key={i}>{page === i ? <White /> : null}</CurPageBar>,
    );
  }

  return (
    <PageInfoWrapper>
      <Page>
        <CurPage>{page + 1}</CurPage>
        <MaxPage>/{maxPage}</MaxPage>
      </Page>
      <PageBarWapper>
        <PageBarBackground>{PageBar}</PageBarBackground>
        <LeftButton onClick={setPage.setPrevPage}>
          <LeftArrowIcon size={ICON_SIZE.small} />
        </LeftButton>
        <RightButton onClick={setPage.setNextPage}>
          <RightArrowIcon size={ICON_SIZE.small} />
        </RightButton>
      </PageBarWapper>
    </PageInfoWrapper>
  );
}

export default PageInfoSection;

const PageBarBackground = styled.div`
  display: flex;
  height: 3px;
  width: 210px;
  background-color: rgba(255, 255, 255, 0.4);
  margin-right: 2em;
`;

const Page = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1em;
`;
const MaxPage = styled.div`
  font-size: 2rem;
  opacity: 0.4;
`;
const CurPage = styled.div`
  font-size: 2.5rem;
  margin-right: 0.3em;
`;
const PageInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const PageBarWapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LeftButton = styled.div`
  cursor: pointer;
`;
const RightButton = styled.div`
  cursor: pointer;
`;
const CurPageBar = styled.div`
  height: 3px;
  width: 100%;
`;
const White = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;
