import { useRouter } from 'next/router';
import { styled } from 'styled-components';

function BoardBody() {
  const router = useRouter();
  const {
    query: { board_type: boardType },
  } = router;

  const safeBoardType = Array.isArray(boardType) ? boardType[0] : boardType;

  return (
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
  );
}
const Table = styled.table`
  font-size: 1.6rem;
  width: 100%;
  margin-bottom: 1em;
`;

const Thead = styled.thead`
  background-color: ${({ theme }) => theme.surfaceAlt};
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
  border-top: 1px solid ${({ theme }) => theme.borderDefault};
  height: 2.4em;
  line-height: 2.4em;
`;
const Tbody = styled.tbody`
  font-size: 1.6rem;
  tr:hover td {
    cursor: pointer;
    background-color: ${({ theme }) => theme.boardHover};
  }
  tr:active td {
    cursor: pointer;
    background-color: ${({ theme }) => theme.boardActive};
  }
`;
const Tr = styled.tr`
  height: 2.4em;
  line-height: 2.4em;
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
`;
const TdCenter = styled.td`
  text-align: center;
`;

export default BoardBody;
