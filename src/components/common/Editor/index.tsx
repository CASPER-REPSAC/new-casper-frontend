import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { styled } from 'styled-components';

function Editor() {
  return (
    <Wrapper>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor&nbsp;5!</p>"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h2,
  h3,
  h4 {
    margin: 1em 0;
  }
  h2 {
    font-size: 4rem;
    border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
  }
  h3 {
    font-size: 3.6rem;
  }
  h4 {
    font-size: 3rem;
  }
  li {
    margin: 0.6em 0;
  }
  a {
    color: ${({ theme }) => theme.textPoint};
  }
  font-size: 1.8rem;

  .ck .ck-content {
    height: 400px;
    box-sizing: border-box;
  }
`;

export default Editor;
