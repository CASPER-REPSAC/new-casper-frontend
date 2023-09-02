/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form';
import CommonCenterWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import QuillEditor from '@src/components/Editor/QuillEditor';
import { useRouter } from 'next/router';
import { KeyboardEvent } from 'react';
import axios from 'axios';
import { getCookie } from '@src/utils/cookies';
import Button from '@src/components/common/Button';
import Input from '@src/components/common/Input';
import styled from 'styled-components';

/**
 *  글 작성 페이지
 */

interface NewForm {
  boardId: string;
  category: number;
  createdAt: string;
  modifiedAt: string;
  file: boolean;
  hide: boolean;
  notice: boolean;
  title: string;
  content: string;
}

function PostPage() {
  const router = useRouter();
  const { board_type: boardType } = router.query;
  const safeBoardType = Array.isArray(boardType) ? boardType[0] : boardType;
  const date = new Date();
  const currentDate = date.toISOString();
  const { register, watch, handleSubmit } = useForm<NewForm>({
    defaultValues: {
      boardId: safeBoardType,
      category: 0,
      createdAt: currentDate,
      modifiedAt: currentDate,
      file: false,
      content: 'teast',
    },
  });

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const qlEditor = document.getElementsByClassName(
        'ql-editor',
      )[0] as HTMLDivElement;
      qlEditor.focus();
    }
  };
  const onValid: SubmitHandler<NewForm> = async (data) => {
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
    <CommonCenterWrapper>
      <Form>
        {/* header */}
        <TitleSection>
          {/* <Select {...register('subCategory', { required: true })}>
            <option value="1">c언어</option>
            <option value="2">시스템</option>
            <option value="3">파이썬</option>
          </Select> */}
          <Header>
            <TitleInput
              register={register('title', { required: true })}
              placeholder="제목을 입력해주세요."
              onKeyDown={(e) => handleKeyDown(e)}
            />
          </Header>
        </TitleSection>

        {/* 에디터 */}
        <EditorSection>
          <QuillEditor />
        </EditorSection>

        {/* 옵션 */}
        <OptionSection>
          <Options>
            <OptionLabel htmlFor="hide" $selected={watch('hide')}>
              <CheckInput
                {...register('hide')}
                type="checkbox"
                id="hide"
                name="hide"
                value="hide"
              />
              <span>비밀글</span>
            </OptionLabel>

            <OptionLabel htmlFor="notice" $selected={watch('notice')}>
              <CheckInput
                id="notice"
                type="checkbox"
                value="notice"
                {...register('notice')}
              />
              <span>고정글</span>
            </OptionLabel>
          </Options>
        </OptionSection>

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
    </CommonCenterWrapper>
  );
}

const Form = styled.form`
  position: relative;
  box-sizing: border-box;
  margin: 80px auto 0;
  height: 70vh;
  width: 100%;
  padding-bottom: 200px;
`;

// const H1 = styled.h1`
//   margin-top: 0.5em;
//   margin-bottom: 0.5em;
// `;

const TitleInput = styled(Input)`
  border: 0;
  width: 100%;
  padding: 25px 20px 25px 20px;
  font-size: 3rem;
  height: 40px;
  ::placeholder {
    font-style: italic;
    color: ${({ theme }) => theme.textWeek};
  }
  :focus {
    border: solid 1px ${({ theme }) => theme.textWeek};
  }
`;

const CheckInput = styled.input`
  display: none;
  border: 1px solid ${({ theme }) => theme.borderDefault};

  width: 20px;
  height: 20px;
  color: #000;
  cursor: pointer;
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  font-size: 1.6rem;
`;
const OptionLabel = styled.label<{ $selected: boolean }>`
  height: 50px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.$selected ? props.theme.textWeek : props.theme.textStrong};

  border: 1px solid
    ${(props) =>
      props.$selected ? props.theme.borderDefault : props.theme.borderDefault};
  background-color: ${(props) =>
    props.$selected ? props.theme.surfacePointDefault : null};
  :hover {
    color: ${({ theme }) => theme.textStrong};
    border: 1px solid ${(props) => props.theme.borderBold};
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

/*
const Select = styled.select`
  background-color: inherit;
  height: 100%;
  color: ${({ theme }) => theme.textDefault};
  font-size: 1.8rem;
  margin-right: 1em;
  width: 120px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.borderDefault};
`;

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
 */

const TitleSection = styled.div`
  margin-top: 2em;
`;
const EditorSection = styled.div`
  margin-top: 2em;
`;
const OptionSection = styled.div`
  margin-top: 2em;
  padding-left: 24px;
  padding-right: 24px;
`;

/*
const FileSection = styled.div`
  margin-top: 2em;
  padding: 24px;
`;
*/
const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2em;
  padding-left: 24px;
  padding-right: 24px;
`;
const WriteButton = styled(Button)`
  width: 100%;
`;

export default PostPage;
