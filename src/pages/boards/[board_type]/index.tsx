import PageTitle from "@src/components/PageTitle";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Link from "next/link";
import SideBar from "@src/components/SideBar";
import { useRouter } from "next/router";
import Button from "@src/components/Button";

// const Editor = dynamic(() => import("@src/components/ToastEditor"), {
//   ssr: false,
// });

const Main = styled.div`
  padding-left: 160px;
  padding-right: 160px;
  @media screen and (max-width: 1440px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  display: flex;
`;

const Table = styled.table`
  width: 100%;
  font-size: 1.6rem;
`;
const Board = styled.div`
  display: flex;
  flex-direction: column;
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
`;
const Tr = styled.tr`
  height: 2.4em;
  line-height: 2.4em;
  border-bottom: 1px solid ${({ theme }) => theme.liquid};
`;
const TdCenter = styled.td`
  text-align: center;
`;

function Boards() {
  const router = useRouter();
  const { board_type } = router.query;
  const onClickWrite = () => {
    router.push(`/boards/${board_type}/posts`);
  };
  return (
    <>
      <PageTitle pageTitle="Boards"></PageTitle>
      <Main>
        <SideBar
          menus={["공지사항", "정회원 게시판", "준회원 게시판"]}
          basePath="boards"
        ></SideBar>
        <Board>
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
              <Tr>
                <TdCenter>1</TdCenter>
                <td>첫 번째 게시글 입니다.</td>
                <TdCenter>박지성</TdCenter>
                <TdCenter>2023.01.01</TdCenter>
                <TdCenter>101</TdCenter>
              </Tr>
              <Tr>
                <TdCenter>2</TdCenter>
                <td>두 번째 게시글 입니다.</td>
                <TdCenter>박지성</TdCenter>
                <TdCenter>2023.01.01</TdCenter>
                <TdCenter>101</TdCenter>
              </Tr>
              <Tr>
                <TdCenter>3</TdCenter>
                <td>세 번째 게시글 입니다.</td>
                <TdCenter>박지성</TdCenter>
                <TdCenter>2023.01.01</TdCenter>
                <TdCenter>101</TdCenter>
              </Tr>
            </Tbody>
            <tfoot></tfoot>
          </Table>
          <Button onClick={onClickWrite} text="작성"></Button>
        </Board>
      </Main>
    </>
  );
}

export default Boards;
