import PageTitle from '@src/components/layout/PageTitle';
import styled, { useTheme } from 'styled-components';
import SideBar from '@src/components/layout/SideBar';
import { useRouter } from 'next/router';
import PageWrapper from '@src/components/layout/PageWrapper';
import { Variants, motion } from 'framer-motion';
import { DefaultButton, DefaultInput } from '@src/components/Components';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

/**
 *  게시판 메인 페이지
 */

const Main = styled.div`
  display: flex;
`;

const Table = styled.table`
  font-size: 1.6rem;
  width: 100%;
  margin-bottom: 1em;
`;
const Board = styled.div`
  width: 100%;
`;
const Thead = styled.thead`
  background-color: ${({ theme }) => theme.color1};
  border-bottom: 1px solid ${({ theme }) => theme.textColor};
  border-top: 1px solid ${({ theme }) => theme.textColor};
  height: 2.4em;
  line-height: 2.4em;
`;
const Tbody = styled.tbody`
  font-size: 1.6rem;
  Tr {
    cursor: pointer;
  }
`;
const Tr = styled(motion.tr)`
  height: 2.4em;
  line-height: 2.4em;
  border-bottom: 1px solid ${({ theme }) => theme.liquid};
`;
const TdCenter = styled.td`
  text-align: center;
`;
const TableFooter = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.2em;
  height: 35px;
`;

const Select = styled.select`
  background-color: inherit;
  height: 100%;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.8rem;
  margin-right: 1em;
  width: 120px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.toastBorder};
`;

const SearchInput = styled(DefaultInput)`
  width: 100%;
  height: 100%;
  padding-left: 45px;
`;
const SerachBar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
`;
const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  left: 15px;
`;
const PageButton = styled(motion.button)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.textColor};
  font-size: 1.6rem;
  cursor: pointer;
`;
const PageButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;
const WriteButton = styled(DefaultButton)`
  align-self: flex-end;
`;

function BoardPage() {
  const router = useRouter();
  const { board_type } = router.query;
  const onClickWrite = () => {
    router.push(`/boards/${board_type}/posts`);
  };
  const theme = useTheme();

  return (
    <PageWrapper>
      <PageTitle pageTitle="Boards"></PageTitle>
      <SideBar
        menus={['공지사항', '정회원 게시판', '준회원 게시판']}
        basePath="/boards"
      ></SideBar>
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
              <SearchInput placeholder="검색어를 입력해 주세요."></SearchInput>
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
            <Tbody>
              {[1, 2, 3].map((val, idx) => (
                <Tr
                  whileHover={{ backgroundColor: theme.liquid }}
                  key={idx}
                  onClick={() => {
                    router.push(`/boards/${board_type}/${val}`);
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
            <WriteButton onClick={onClickWrite}>작성</WriteButton>
            <PageButtonSection>
              <MdKeyboardArrowLeft size={35}></MdKeyboardArrowLeft>
              <PageButton>1</PageButton>
              <PageButton>2</PageButton>
              <PageButton>3</PageButton>
              <PageButton>4</PageButton>
              <PageButton>5</PageButton>
              <PageButton>6</PageButton>
              <MdKeyboardArrowRight size={35}></MdKeyboardArrowRight>
            </PageButtonSection>
          </TableFooter>
        </Board>
      </Main>
    </PageWrapper>
  );
}

export default BoardPage;
