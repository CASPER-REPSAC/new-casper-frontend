import styled from 'styled-components';

interface Props {
  message: string;
}

function ToastPopup({ message }: Props) {
  return <Wrapper>{message}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  width: 200px;
  height: 60px;
  background-color: ${({ theme }) => theme.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.white};
`;

export default ToastPopup;
