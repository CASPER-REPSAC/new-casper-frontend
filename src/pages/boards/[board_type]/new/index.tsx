import { useForm } from 'react-hook-form';
import CommonCenterWrapper from '@src/components/Layout/CommonCenterWrapper/CommonCenterWrapper';
import QuillEditor from '@src/components/Editor/QuillEditor';
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
import { KeyboardEvent } from 'react';

/**
 *  글 작성 페이지
 */

function PostPage() {
  const { register, watch } = useForm();
  // const { board_type } = router.query;

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const qlEditor = document.getElementsByClassName(
        'ql-editor',
      )[0] as HTMLDivElement;
      qlEditor.focus();
    }
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
            <OptionLabel htmlFor="secret" selected={watch('secret')}>
              <CheckInput
                {...register('secret')}
                type="checkbox"
                id="secret"
                name="secret"
                value={'secret'}
              />
              <span>비밀글</span>
            </OptionLabel>

            <OptionLabel htmlFor="fix" selected={watch('fix')}>
              <CheckInput
                {...register('fix')}
                id="fix"
                type="checkbox"
                name="fix"
                value={'fix'}
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
          <WriteButton>작성 하기</WriteButton>
        </ButtonSection>
      </Form>
    </CommonCenterWrapper>
  );
}

export default PostPage;
