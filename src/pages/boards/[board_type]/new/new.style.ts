import Button from '@src/components/Button/Button';
import Input from '@src/components/Input/Input';
import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  box-sizing: border-box;
  margin: 80px auto 0;
  width: 100%;
  padding-bottom: 200px;
`;

export const H1 = styled.h1`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

export const TitleInput = styled(Input)`
  border: 0;
  width: 100%;
  padding-left: 15px;
  font-size: 3rem;
  height: 40px;
  ::placeholder {
    font-style: italic;
    color: ${({ theme }) => theme.textWeek};
  }
`;

export const CheckInput = styled.input`
  display: none;
  border: 1px solid ${({ theme }) => theme.borderDefault};

  width: 20px;
  height: 20px;
  color: #000;
  cursor: pointer;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  font-size: 1.6rem;
`;
export const OptionLabel = styled.label<{ selected: boolean }>`
  height: 50px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.selected ? props.theme.textWeek : props.theme.textStrong};

  border: 1px solid
    ${(props) =>
      props.selected ? props.theme.borderDefault : props.theme.borderDefault};
  background-color: ${(props) =>
    props.selected ? props.theme.surfacePointDefault : null};
  :hover {
    color: ${({ theme }) => theme.textStrong};
    border: 1px solid ${(props) => props.theme.borderBold};
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;
export const Select = styled.select`
  background-color: inherit;
  height: 100%;
  color: ${({ theme }) => theme.textDefault};
  font-size: 1.8rem;
  margin-right: 1em;
  width: 120px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.borderDefault};
`;

export const FileInput = styled.input`
  display: none;
`;
export const FileInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: 1px solid ${({ theme }) => theme.borderDefault};

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
  padding-left: 24px;
  padding-right: 24px;
`;
export const FileSection = styled.div`
  margin-top: 2em;
  padding: 24px;
`;
export const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2em;
  padding-left: 24px;
  padding-right: 24px;
`;
export const WriteButton = styled(Button)`
  width: 100%;
`;
