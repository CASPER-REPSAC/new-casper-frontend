import PageTitle from '@src/components/layout/PageTitle/PageTitle';
import { useForm } from 'react-hook-form';
import PageWrapper from '@src/components/layout/PageWrapper/PageWrapper';
import { useRouter } from 'next/router';
import QuillEditor from '@src/components/editor/QuillEditor';
import {
  Button,
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
} from './boards.style';

/**
 *  글 작성 페이지
 */

function PostPage() {
  const { register, watch } = useForm();
  const router = useRouter();
  const { board_type } = router.query;

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
          <H1>옵션</H1>
          <Options>
            <label htmlFor="secret">비밀글</label>
            <CheckInput
              {...register('secret')}
              type="checkbox"
              name="secret"
              value={'secret'}
            />
            <label htmlFor="fix">고정글</label>
            <CheckInput
              {...register('fix')}
              type="checkbox"
              name="secret"
              value={'secret'}
            />
          </Options>
        </OptionSection>

        {/* 파일 첨부 */}
        <FileSection>
          <H1>파일</H1>
          <FileInputLabel htmlFor="file">파일 첨부</FileInputLabel>
          <FileInput type="file" id="file"></FileInput>
        </FileSection>

        {/* Footer */}
        <ButtonSection>
          <Button>작성</Button>
        </ButtonSection>
      </Form>
    </PageWrapper>
  );
}

export default PostPage;
