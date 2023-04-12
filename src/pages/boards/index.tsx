import PageTitle from "../../components/PageTitle";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Link from "next/link";
import SideBar from "@src/components/SideBar";
import { useRouter } from "next/router";

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
const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${({ theme }) => theme.color1};
  border: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
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
`;

function Boards() {
  const router = useRouter();
  router.push("/boards/notice_board");
  const onClickWrite = () => {
    router.push("write");
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
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>날짜</th>
                <th>조회수</th>
              </tr>
            </Thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>첫번째 게시글 입니다.</td>
                <td>박지성</td>
                <td>2023.01.01</td>
                <td>101</td>
              </tr>
              <tr>
                <td>1</td>
                <td>첫번째 게시글 입니다.</td>
                <td>박지성</td>
                <td>2023.01.01</td>
                <td>101</td>
              </tr>
              <tr>
                <td>1</td>
                <td>첫번째 게시글 입니다.</td>
                <td>박지성</td>
                <td>2023.01.01</td>
                <td>101</td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </Table>
          <Button onClick={onClickWrite}>작성</Button>
        </Board>
      </Main>
    </>
  );
}

export default Boards;
