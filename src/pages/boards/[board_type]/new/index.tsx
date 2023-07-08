import { useForm } from 'react-hook-form';
import PageWrapper from '@src/components/Layout/PageWrapper/PageWrapper';
import { useRouter } from 'next/router';
import QuillEditor from '@src/components/Editor/QuillEditor';
import {
  ButtonSection,
  CheckInput,
  EditorSection,
  FileInput,
  FileInputLabel,
  FileSection,
  Form,
  H1,
  Header,
  TitleInput,
  OptionSection,
  Options,
  Select,
  TitleSection,
  WriteButton,
  OptionLabel,
} from './new.style';

/**
 *  글 작성 페이지
 */

function PostPage() {
  const { register, watch } = useForm();
  const router = useRouter();
  // const { board_type } = router.query;
  console.log(watch('fix'));

  return (
    <PageWrapper>
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
              {...register('title', { required: true })}
              placeholder="제목을 입력해주세요."
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
    </PageWrapper>
  );
}

export default PostPage;
