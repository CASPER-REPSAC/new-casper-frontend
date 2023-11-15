import dynamic from 'next/dynamic';
import { styled } from 'styled-components';
import { Block } from '@blocknote/core';

const BlockNote = dynamic(
  () => import('@src/components/organism/Editor/BlockNote'),
  {
    ssr: false,
  },
);

interface Props {
  content: Block[];
}
function ContentSection({ content }: Props) {
  return (
    <Wrapper>
      <BlockNote editable={false} initialContent={content} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 500px;
  margin-top: 20px;
`;

export default ContentSection;
