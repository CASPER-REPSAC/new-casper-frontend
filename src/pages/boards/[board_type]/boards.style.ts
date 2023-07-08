import DefaultButton from '@src/components/Button/Button';
import Input from '@src/components/Input/Input';
import { motion } from 'framer-motion';
import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
`;

export const Table = styled.table`
  font-size: 1.6rem;
  width: 100%;
  margin-bottom: 1em;
`;
export const Board = styled.div`
  width: 100%;
`;
export const Thead = styled.thead`
  background-color: ${({ theme }) => theme.color1};
  border-bottom: 1px solid ${({ theme }) => theme.textColor};
  border-top: 1px solid ${({ theme }) => theme.textColor};
  height: 2.4em;
  line-height: 2.4em;
`;
export const Tbody = styled.tbody`
  font-size: 1.6rem;
  Tr {
    cursor: pointer;
  }
`;
export const Tr = styled(motion.tr)`
  height: 2.4em;
  line-height: 2.4em;
  border-bottom: 1px solid ${({ theme }) => theme.liquid};
`;
export const TdCenter = styled.td`
  text-align: center;
`;
export const TableFooter = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.2em;
  height: 35px;
`;

export const SearchInput = styled(Input)`
  width: 100%;
  height: 100%;
  padding-left: 45px;
`;
export const SerachBar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
`;
export const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  left: 15px;
`;
export const PageButton = styled(motion.button)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.textColor};
  font-size: 1.6rem;
  cursor: pointer;
`;
export const PageButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;
export const WriteButton = styled(DefaultButton)`
  align-self: flex-end;
`;

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
export const Button = styled(DefaultButton)`
  width: 100%;
`;
