import { DefaultButton, DefaultInput } from "@src/components/Components";
import styled from "styled-components";

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
export const Input = styled(DefaultInput)`
  height: 34px;
  width: 400px;
  font-size: 1.4rem;
`;
export const IntroInput = styled.textarea`
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.color2};
  width: 290px;
  color: ${({ theme }) => theme.textColor};
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.textColor};
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
  border: 1px solid ${({ theme }) => theme.color2};
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
