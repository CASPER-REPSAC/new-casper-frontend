import PageTitle from "@src/components/layout/PageTitle";
import styled, { useTheme } from "styled-components";
import dynamic from "next/dynamic";
import Link from "next/link";
import SideBar from "@src/components/layout/SideBar";
import { useRouter } from "next/router";
import Button from "@src/components/Button";
import PageWrapper from "@src/components/layout/PageWrapper";
import { Variants, motion } from "framer-motion";

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
`;

const trVariants: Variants = {
  hover: {},
};

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
        menus={["공지사항", "정회원 게시판", "준회원 게시판"]}
        basePath="/boards"
      ></SideBar>
      <Main>
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
            <Button
              onClick={onClickWrite}
              text="작성"
              style={{ position: "absolute", right: 0 }}
            ></Button>
          </TableFooter>
        </Board>
      </Main>
    </PageWrapper>
  );
}

export default BoardPage;
