import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import DefaultForm from '@src/components/common/defaultTag/DefaultForm';
import { PostReqData } from '@src/types/PostTypes';
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
  const defaultValues: PostReqData = {
    boardId: 'notice_board',
    category: 'all',
    createdAt: '1111-01-01',
    modifiedAt: '1111-01-01',
    file: false,
    hide: false,
    notice: false,
    title: '',
    content: null,
    photo: 'test',
  };
  const methods = useForm<PostReqData>({
    defaultValues,
  });

  return (
    <CommonCenterWrapper>
      <FormProvider {...methods}>
        <Form>
          {boardTypeSelectSeciton}
          {titleSection}
          {editorSection}
          {buttonSection}
        </Form>
      </FormProvider>
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
