import DefaultButton from '@src/components/Button/Button';
import Input from '@src/components/Input/Input';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
  height: 400px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
`;
export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-wrap: wrap;
`;
export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const IntroInput = styled.textarea`
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.borderDefault};
  width: 290px;
  color: ${({ theme }) => theme.textDefault};
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.borderBold};
  }

  padding: 10px;
  box-sizing: border-box;
  font-size: 1.4rem;
`;
export const Avatar = styled(Input)`
  display: none;
`;
export const AvatarLabel = styled.label`
  width: 290px;
  height: 290px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.borderDefault};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  margin-bottom: 0.5em;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Button = styled(DefaultButton)`
  align-self: flex-end;
  margin-top: 1em;
`;
