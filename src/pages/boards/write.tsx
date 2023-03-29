import PageTitle from "@src/components/PageTitle";
import styled from "styled-components";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@src/components/ToastEditor"), {
  ssr: false,
});

function WritePage() {
  return (
    <>
      <Editor />
    </>
  );
}

export default WritePage;
