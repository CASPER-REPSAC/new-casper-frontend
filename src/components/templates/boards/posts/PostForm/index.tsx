import { KeyboardEvent } from 'react';
import { styled } from 'styled-components';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import DefaultForm from '@src/components/common/DefaultForm';
import Button from '@src/components/common/DefaultButton';
import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import { PLACEHOLDER } from '@src/utils/constants';
import usePostArticle from '@src/hooks/apis/boards/usePostArticle';

import dynamic from 'next/dynamic';
import { PostReqData } from '@src/types/PostTypes';

const CKEditor = dynamic(() => import('@src/components/common/Editor'), {
  ssr: false,
});

function PostForm() {
  const methods = useForm<PostReqData>({
    defaultValues: {
      boardId: 'notice_board',
      category: 0,
      createdAt: '2023-01-01',
      modifiedAt: '2023-01-01',
      file: false,
      hide: false,
      notice: false,
      nickname: 'test-name',
      title: 'initial-title',
      content: 'initial-content',
    },
  });
  const { register, handleSubmit } = methods;
  const { mutate } = usePostArticle();

  // const onChangeEditor = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   setValue(e.currentTarget.value);
  // };

  const focusEditor = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      methods.setFocus('content');
    }
  };
  const onValid: SubmitHandler<PostReqData> = async (data) => {
    mutate(data);
  };

  const onInvalid = () => {
    // alert('입력값을 확인해 주세요');
  };

  const titleRegister = register('title', { required: true });

  return (
    <FormProvider {...methods}>
      <Form>
        <TitleSection>
          <TitleInput
            labelSize="large"
            register={titleRegister}
            placeholder={PLACEHOLDER.title}
            onKeyDown={(e) => focusEditor(e)}
          />
        </TitleSection>

        <EditorSection>
          <CKEditor />
        </EditorSection>

        <ButtonSection>
          <WriteButton type="large" onClick={handleSubmit(onValid, onInvalid)}>
            작성 하기
          </WriteButton>
        </ButtonSection>
      </Form>
    </FormProvider>
  );
}

export default PostForm;

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
  padding-bottom: 200px;
`;
const TitleInput = styled(LabelInput)`
  border: 0;
  width: 100%;
  font-size: 3rem;
  height: 40px;
  &::placeholder {
    font-style: italic;
  }
  padding: 1em 20px;
`;
const TitleSection = styled.div`
  margin-top: 2em;
`;
const EditorSection = styled.div`
  margin-top: 2em;
`;
const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2em;
`;
const WriteButton = styled(Button)`
  width: 100%;
`;
