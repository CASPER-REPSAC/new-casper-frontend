import DefaultButton from '@src/components/common/DefaultButton';
import { AiOutlineClose } from 'react-icons/ai';
import { styled } from 'styled-components';

interface Props {
  title: string;
}

function BoardCategoryCard({ title }: Props) {
  return (
    <CategoryItem>
      <span>{title}</span>
      <DefaultButton type="small" color="red">
        <AiOutlineClose />
      </DefaultButton>
    </CategoryItem>
  );
}

const CategoryItem = styled.li`
  list-style: none;
  background-color: ${({ theme }) => theme.surfacePointDefault};
  padding: 0.4em 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  font-size: 1.6rem;
`;

export default BoardCategoryCard;
