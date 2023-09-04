import { useRouter } from 'next/router';
import { KeyboardEvent } from 'react';
import { styled } from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import DefaultForm from '@src/components/common/DefaultForm';
import DefaultInput from '@src/components/common/DefaultInput';
import Button from '@src/components/common/DefaultButton';
import { getCookie } from '@src/utils/cookies';
import VanillaEditor from '@src/components/molecules/Editor/VanillaEditor';

interface PostFormData {
  title: string;
  content: string;
  attachment: boolean;
}

function PostForm() {
  const router = useRouter();
  const { board_type: boardType } = router.query;
  const safeBoardType = Array.isArray(boardType) ? boardType[0] : boardType;
  const { register, handleSubmit } = useForm<PostFormData>();

  const focusEditor = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const qlEditor = document.getElementsByClassName(
        'ql-editor',
      )[0] as HTMLDivElement;
      qlEditor.focus();
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

  return (
    <Form>
      {/* header */}
      <TitleSection>
        <Header>
          <TitleInput
            register={register('title', { required: true })}
            placeholder="제목을 입력해주세요."
            onKeyDown={(e) => focusEditor(e)}
          />
        </Header>
      </TitleSection>

      {/* 에디터 */}
      <EditorSection>
        <VanillaEditor />
      </EditorSection>

      {/* 파일 첨부 */}
      {/* <FileSection>
          <H1>파일</H1>
          <FileInputLabel htmlFor="file">파일 첨부</FileInputLabel>
          <FileInput type="file" id="file"></FileInput>
        </FileSection> */}

      {/* Footer */}
      <ButtonSection>
        <WriteButton onClick={handleSubmit(onValid, onInvalid)}>
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
`;

const TitleInput = styled(DefaultInput)`
  border: 0;
  width: 100%;
  font-size: 3rem;
  height: 40px;
  &::placeholder {
    font-style: italic;
    color: ${({ theme }) => theme.textWeek};
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
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

/*

const FileInput = styled.input`
  display: none;
`;
const FileInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: 1px solid ${({ theme }) => theme.borderDefault};
  border-radius: 4px;
  height: 100px;
  cursor: pointer;
`;

const FileSection = styled.div`
  margin-top: 2em;
  padding: 24px;
`;
 */
