import { KeyboardEvent } from 'react';
import { styled } from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import DefaultForm from '@src/components/common/DefaultForm';
import { PostReqData } from '@src/types/PostTypes';
import dynamic from 'next/dynamic';
import BoardTypeSelectSection from '@src/components/organism/postForm/BoardTypeSelectSection';
import TitleSection from '@src/components/organism/postForm/TitleSection';
import WriteButtonSection from '@src/components/organism/postForm/WriteButtonSection';

export const DraftEditor = dynamic(
  () => import('@src/components/molecules/Editor/DraftEditor'),
  {
    ssr: false,
  },
);

function PostForm() {
  const defaultValues: PostReqData = {
    boardId: 'notice_board',
    category: 'all',
    createdAt: '1111-01-01',
    modifiedAt: '1111-01-01',
    file: false,
    hide: false,
    notice: false,
    nickname: 'test-name',
    title: '',
    content: null,
    photo: 'test',
  };
  const methods = useForm<PostReqData>({
    defaultValues,
  });

  const focusEditor = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      methods.setFocus('content');
    }
  };

  return (
    <FormProvider {...methods}>
      <Form>
        <BoardTypeSelectSection />
        <TitleSection onKeyDown={(e) => focusEditor(e)} />
        <EditorSection>
          <DraftEditor />
        </EditorSection>
        <WriteButtonSection />
      </Form>
    </FormProvider>
  );
}

const Form = styled(DefaultForm)`
  width: 450px;
  @media screen and (min-width: 768px) {
    width: 700px;
  }
  @media screen and (min-width: 1024px) {
    width: 1000px;
  }
  @media screen and (min-width: 1440px) {
    width: 1400px;
  }
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;
const EditorSection = styled.div``;

export default PostForm;
