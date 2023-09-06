import { useRouter } from 'next/router';
import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import DefaultForm from '@src/components/common/DefaultForm';
import Button from '@src/components/common/DefaultButton';
import VanillaEditor from '@src/components/molecules/Editor/VanillaEditor';
import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import FileInput from '@src/components/molecules/Inputs/FileInput';
import { getCookie } from '@src/utils/cookies';
import { INPUT_LABEL, PLACEHOLDER } from '@src/utils/constants';

interface PostFormData {
  title: string;
  content: string;
  attachment: boolean;
}

function PostForm() {
  const [value, setValue] = useState('');
  const router = useRouter();
  const { board_type: boardType } = router.query;
  const safeBoardType = Array.isArray(boardType) ? boardType[0] : boardType;
  const { register, handleSubmit } = useForm<PostFormData>();
  const editorRef = useRef<HTMLTextAreaElement>(null);

  const onChangeEditor = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.currentTarget.value);

  const focusEditor = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      editorRef.current?.focus();
    }
  };
  const onValid: SubmitHandler<PostFormData> = async (data) => {
    const headers = { Authorization: `Bearer ${getCookie('is_login')}` };
    const res = await axios.post('/api/article/write', data, { headers });

    if (res.status === 200) {
      router.push(`/boards/${safeBoardType}`);
    }
  };

  const onInvalid = () => {
    // alert('입력값을 확인해 주세요');
  };

  const titleRegister = register('title', { required: true });
  const fileRegister = register('attachment');

  return (
    <Form>
      <TitleSection>
        <TitleInput
          label={INPUT_LABEL.title}
          labelSize="large"
          register={titleRegister}
          placeholder={PLACEHOLDER.title}
          onKeyDown={(e) => focusEditor(e)}
        />
      </TitleSection>

      <EditorSection>
        <VanillaEditor
          ref={editorRef}
          placeholder={PLACEHOLDER.editor}
          onChange={onChangeEditor}
          value={value}
        />
      </EditorSection>

      <FileSection>
        <FileInput register={fileRegister} />
      </FileSection>

      <ButtonSection>
        <WriteButton type="large" onClick={handleSubmit(onValid, onInvalid)}>
          작성 하기
        </WriteButton>
      </ButtonSection>
    </Form>
  );
}

export default PostForm;

const Form = styled(DefaultForm)`
  width: 450px;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
  @media screen and (min-width: 1024px) {
    width: 800px;
  }
  @media screen and (min-width: 1440px) {
    width: 1000px;
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
const FileSection = styled.div`
  margin-top: 2em;
`;
