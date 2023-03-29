import PageTitle from "../../components/PageTitle";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Link from "next/link";

const Editor = dynamic(() => import("@src/components/ToastEditor"), {
  ssr: false,
});

const EditorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5em;
`;

const Button = styled.button`
  width: 200px;
  height: 100px;
`;
function Boards() {
  return (
    <>
      <PageTitle pageTitle="Boards"></PageTitle>
      <Button>
        <Link href={"/boards/write"}>작성작성</Link>
      </Button>
    </>
  );
}

export default Boards;
