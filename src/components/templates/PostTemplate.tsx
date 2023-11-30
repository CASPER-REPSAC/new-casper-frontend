import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { DefaultForm } from 'app/_components/defaultTag';
import { CommonCenterWrapper } from '@src/components/common/centerWrapper';

interface Props {
  boardTypeSelectSeciton: ReactNode;
  titleSection: ReactNode;
  editorSection: ReactNode;
  buttonSection: ReactNode;
}

function PostTemplate({
  boardTypeSelectSeciton,
  titleSection,
  editorSection,
  buttonSection,
}: Props) {
  return (
    <CommonCenterWrapper>
      <Form>
        {boardTypeSelectSeciton}
        {titleSection}
        {editorSection}
        {buttonSection}
      </Form>
    </CommonCenterWrapper>
  );
}

const Form = styled(DefaultForm)`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  max-width: none;
`;

export default PostTemplate;
