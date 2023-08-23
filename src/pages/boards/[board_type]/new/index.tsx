import { SubmitHandler, useForm } from 'react-hook-form';
import CommonCenterWrapper from '@src/components/Layout/CommonCenterWrapper/CommonCenterWrapper';
import QuillEditor from '@src/components/Editor/QuillEditor';
import { useRouter } from 'next/router';
import {
  ButtonSection,
  CheckInput,
  EditorSection,
  Form,
  Header,
  TitleInput,
  OptionSection,
  Options,
  TitleSection,
  WriteButton,
  OptionLabel,
} from './new.style';
import { KeyboardEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from '@src/Utils/Cookies';

/**
 *  글 작성 페이지
 */

interface newForm {
  boardId: String;
  category: Number;
  createdAt: string;
  modifiedAt: string;
  file: boolean;
  hide: boolean;
  notice: boolean;
  title: String;
  content: String;
}

function PostPage() {
  const router = useRouter();
  const { board_type } = router.query;
  const date = new Date();
  const typeboard = { board_type }.board_type;
  const currentDate = date.toISOString();
  const { register, watch, handleSubmit } = useForm<newForm>({
    defaultValues: {
      boardId: typeboard,
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
  const onValid: SubmitHandler<newForm> = async (data) => {
    // const formdata = new FormData();
    // const blob = new Blob([JSON.stringify(data)], {
    //   type: 'application/json',
    // });
    const headers = { Authorization: `Bearer.${getCookie('is_login')}` };
    await axios
      .post('/api/article/write', data, { headers })
      .then((res) => {
        alert('작성성공');
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  const onInvalid = () => {
    alert('입력값을 확인해 주세요');
    return;
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
            <OptionLabel htmlFor="hide" selected={watch('hide')}>
              <CheckInput
                {...register('hide')}
                type="checkbox"
                id="hide"
                name="hide"
                value={'hide'}
              />
              <span>비밀글</span>
            </OptionLabel>

            <OptionLabel htmlFor="notice" selected={watch('notice')}>
              <CheckInput
                {...register('notice')}
                id="notice"
                type="checkbox"
                name="notice"
                value={'notice'}
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

export default PostPage;
