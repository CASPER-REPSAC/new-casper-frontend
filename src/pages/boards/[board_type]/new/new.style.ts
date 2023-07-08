import Button from '@src/components/Button/Button';
import Input from '@src/components/Input/Input';
import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  height: calc(150vh - 70px - 50px); // header, footer 뺀 값
  padding-bottom: 10vh;
  box-sizing: border-box;
  margin-top: 70px;
  margin: 0 auto;
  width: 700px;
`;

export const H1 = styled.h1`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

export const TitleInput = styled(Input)`
  border: 0;
  border-bottom: 0px solid ${({ theme }) => theme.toastBorder};
  width: 100%;
  padding-left: 15px;
  font-size: 3rem;
  height: 40px;
  ::placeholder {
    font-style: italic;
    color: ${({ theme }) => theme.color2};
  }
`;

export const CheckInput = styled.input`
  align-self: flex-start;
  margin-right: 1em;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.6rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;
export const Select = styled.select`
  background-color: inherit;
  height: 100%;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.8rem;
  margin-right: 1em;
  width: 120px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.toastBorder};
`;

export const FileInput = styled.input`
  display: none;
`;
export const FileInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: 1px solid ${({ theme }) => theme.toastBorder};

  border-radius: 4px;
  height: 100px;
  cursor: pointer;
`;

export const TitleSection = styled.div`
  margin-top: 2em;
`;
export const EditorSection = styled.div`
  margin-top: 2em;
`;
export const OptionSection = styled.div`
  margin-top: 2em;
  padding: 24px;
`;
export const FileSection = styled.div`
  margin-top: 2em;
  padding: 24px;
`;
export const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2em;
  padding: 24px;
`;
export const WriteButton = styled(Button)`
  width: 100%;
`;
