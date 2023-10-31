import styled from 'styled-components';

const DraftTextStyle = styled.div`
  .DraftEditor-root {
    width: 100%;
    overflow-y: auto;
  }
  .DraftEditor-editorContainer,
  .public-DraftEditor-content {
    height: 100%;
    box-sizing: border-box;
    font-size: 2.6rem;
    div {
      line-height: 1.4em;
    }
  }
`;

export default DraftTextStyle;
