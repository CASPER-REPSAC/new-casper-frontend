import { Category } from '@app/_types/boardTypes';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useCategory(boardId: string) {
  const queryKey = ['category', boardId];

  const queryFn = async () => {
    const { data } = await axios.get<Category>(
      `/proxy/api/category?board=${boardId}`,
    );
    return data;
  };

  return useQuery({ queryKey, queryFn });
}

export default useCategory;
