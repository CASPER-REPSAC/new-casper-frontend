import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import PageTitle from '@src/components/common/PageTitle';
import SideBar from '@src/components/common/SideBar';
import PageWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import DefaultButton from '@src/components/common/Button';
import Input from '@src/components/common/Input';
import Custom404 from '@src/pages/Error/404';
import PATH from '@src/utils/urls';
import { PAGE_TITLE } from '@src/utils/constants';

/**
 *  게시판 메인 페이지
 */

function BoardPage() {
  const { register } = useForm();
  const router = useRouter();
  const {
    asPath,
    query: { board_type: boardType },
  } = router;

  const safeBoardType = Array.isArray(boardType) ? boardType[0] : boardType;
  const validBoradPathList = Object.values(PATH.boards).map(
    (board) => board.url,
  );
  const isValidPath = !safeBoardType || !validBoradPathList.includes(asPath);

  const onClickWrite = () => {
    router.push(`${asPath}/new`);
  };

  if (isValidPath) return <Custom404 />;
  return (
    <>
      <PageTitle pageTitle={PAGE_TITLE.board} />
      <PageWrapper>
        <SideBar menus={PATH.boards} />
        <Main>
          <Board>
            <TableHeader>
              <Select>
                {/* Todo. board_type에 따라서 옵션 변경 */}
                <option value="1">전체</option>
                <option value="2">ex1</option>
                <option value="3">ex2</option>
              </Select>
              <SerachBar>
                <SearchInput
                  register={register('search')}
                  placeholder="검색어를 입력해 주세요."
                />
                <SearchIcon size={20} />
              </SerachBar>
            </TableHeader>
            <Table>
              <Thead>
                <Tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>날짜</th>
                  <th>조회수</th>
                </Tr>
              </Thead>
              {/* <Tbody>
                {BoardData.map((Data) => (
                  <Tr
                    key={Data}
                    onClick={() => {
                      router.push(`/boards/${board_type}/${Data.idx}`);
                    }}
                  >
                    <TdCenter>{}</TdCenter>
                    <td>{Data.title}</td>
                    <TdCenter>박지성</TdCenter>
                    <TdCenter>2023.01.01</TdCenter>
                    <TdCenter>101</TdCenter>
                  </Tr>
                ))}
              </Tbody> */}
              <Tbody>
                {[1, 2, 3].map((val) => (
                  <Tr
                    key={val}
                    onClick={() => {
                      router.push(`/boards/${safeBoardType}/${val}`);
                    }}
                  >
                    <TdCenter>{val}</TdCenter>
                    <td>{val}번째 게시글 입니다.</td>
                    <TdCenter>박지성</TdCenter>
                    <TdCenter>2023.01.01</TdCenter>
                    <TdCenter>101</TdCenter>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <TableFooter>
              <WriteButton onClick={onClickWrite}>작성 하기</WriteButton>
              <PageButtonSection>
                <MdKeyboardArrowLeft size={35} />
                <PageButton>1</PageButton>
                <PageButton>2</PageButton>
                <PageButton>3</PageButton>
                <PageButton>4</PageButton>
                <PageButton>5</PageButton>
                <PageButton>6</PageButton>
                <MdKeyboardArrowRight size={35} />
              </PageButtonSection>
            </TableFooter>
          </Board>
        </Main>
      </PageWrapper>
    </>
  );
}

export const Main = styled.div`
  display: flex;
`;

export const Table = styled.table`
  font-size: 1.6rem;
  width: 100%;
  margin-bottom: 1em;
`;
export const Board = styled.div`
  width: 100%;
`;
export const Thead = styled.thead`
  background-color: ${({ theme }) => theme.surfacePointDefault};
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
  border-top: 1px solid ${({ theme }) => theme.borderDefault};
  height: 2.4em;
  line-height: 2.4em;
`;
export const Tbody = styled.tbody`
  font-size: 1.6rem;
  Tr {
    cursor: pointer;
    :hover {
      transition: 0.2s;
      background-color: ${({ theme }) => theme.surfacePointAlt};
    }
  }
`;
export const Tr = styled.tr`
  height: 2.4em;
  line-height: 2.4em;
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
`;
export const TdCenter = styled.td`
  text-align: center;
`;
export const TableFooter = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.2em;
  height: 35px;
`;

export const SearchInput = styled(Input)`
  width: 100%;
  height: 100%;
  padding-left: 45px;
`;
export const SerachBar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
`;
export const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  left: 15px;
`;
export const PageButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.borderDefault};
  color: ${({ theme }) => theme.textWeek};
  font-size: 1.6rem;
  cursor: pointer;
`;
export const PageButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;
export const WriteButton = styled(DefaultButton)`
  align-self: flex-end;
`;

export const Form = styled.form`
  position: relative;
  height: calc(150vh - 70px - 50px); // header, footer 뺀 값
  padding-bottom: 10vh;
  box-sizing: border-box;
  margin-top: 70px;
  margin: 0 auto;
  width: 700px;
`;

export const H1 = styled.h1`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

export const TitleInput = styled(Input)`
  border: 0;
  border-bottom: 0px solid ${({ theme }) => theme.borderDefault};
  width: 100%;
  padding-left: 15px;
  font-size: 3rem;
  height: 40px;
  ::placeholder {
    font-style: italic;
    color: ${({ theme }) => theme.textWeek};
  }
`;

export const CheckInput = styled.input`
  align-self: flex-start;
  margin-right: 1em;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.6rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;
export const Select = styled.select`
  background-color: inherit;
  height: 100%;
  color: ${({ theme }) => theme.textDefault};
  font-size: 1.8rem;
  margin-right: 1em;
  width: 120px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.borderDefault};
`;

export const FileInput = styled.input`
  display: none;
`;
export const FileInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: 1px solid ${({ theme }) => theme.borderDefault};

  border-radius: 4px;
  height: 100px;
  cursor: pointer;
`;

// const TitleSection = styled.div`
//   margin-top: 2em;
// `;
// const EditorSection = styled.div`
//   margin-top: 2em;
// `;
// const OptionSection = styled.div`
//   margin-top: 2em;
//   padding: 24px;
// `;
// const FileSection = styled.div`
//   margin-top: 2em;
//   padding: 24px;
// `;
// const ButtonSection = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   margin-top: 2em;
//   padding: 24px;
// `;
// const Button = styled(DefaultButton)`
//   width: 100%;
// `;

export default BoardPage;
