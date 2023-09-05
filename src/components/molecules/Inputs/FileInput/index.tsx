import { useId } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { styled } from 'styled-components';

interface Props {
  register: UseFormRegisterReturn;
}

function FileInput({ register }: Props) {
  const uiqueId = useId();
  return (
    <FileInputLabel htmlFor={uiqueId}>
      파일 첨부
      <DisplayNoneInput type="file" id={uiqueId} {...register} />
    </FileInputLabel>
  );
}

export default FileInput;

const DisplayNoneInput = styled.input`
  display: none;
`;
const FileInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: 1px solid ${({ theme }) => theme.borderDefault};
  border-radius: 4px;
  height: 100px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.surfacePointAlt};
    border: 1px solid ${({ theme }) => theme.borderBold};
  }
`;
