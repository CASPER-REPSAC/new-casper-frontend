import DefaultButton from '@src/components/common/DefaultButton';
import { CloseIcon } from '@src/components/common/Icons';
import { styled } from 'styled-components';

interface Props {
  title: string;
}

function BoardCategoryCard({ title }: Props) {
  return (
    <CategoryItem>
      <span>{title}</span>
      <DefaultButton size="small" color="red">
        <CloseIcon />
      </DefaultButton>
    </CategoryItem>
  );
}

const CategoryItem = styled.li`
  list-style: none;
  background-color: ${({ theme }) => theme.surfaceAlt};
  padding: 0.4em 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  font-size: 1.6rem;
`;

export default BoardCategoryCard;
