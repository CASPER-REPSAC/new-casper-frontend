import PageTitle from '@src/components/Layout2/PageTitle/PageTitle';
import { useTheme } from 'styled-components';
import SideBar from '@src/components/Layout2/SideBar/SideBar';
import { useRouter } from 'next/router';
import PageWrapper from '@src/components/Layout2/CommonCenterWrapper/CommonCenterWrapper';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import {
  Board,
  Main,
  PageButton,
  PageButtonSection,
  SearchIcon,
  SearchInput,
  Select,
  SerachBar,
  Table,
  TableFooter,
  TableHeader,
  Tbody,
  TdCenter,
  Thead,
  Tr,
  WriteButton,
} from './boards.style';

/**
 *  게시판 메인 페이지
 */

function BoardPage() {
  const router = useRouter();
  const { board_type } = router.query;
  const onClickWrite = () => {
    router.push(`/boards/${board_type}/new`);
  };
  const theme = useTheme();
  const sideBarParmas = {
    공지사항: '/boards/notice_board',
    '정회원 게시판': '/boards/full_member_board',
    '준회원 게시판': '/boards/associate_member_board',
  };
  return (
    <>
      <PageTitle pageTitle="Boards"></PageTitle>
      <PageWrapper>
        <SideBar menu_path={sideBarParmas}></SideBar>
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
              <WriteButton onClick={onClickWrite}>작성 하기</WriteButton>
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
    </>
  );
}

export default BoardPage;
