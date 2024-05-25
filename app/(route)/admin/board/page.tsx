import { API_URL } from '@app/_constants/apiUrl';
import { BOARD_TYPE } from '@app/_constants/mock';
import { Entries } from '@app/_types/entries';
import BoardCard from './_components/BoardCard';

const getAllSubCategories = async () => {
  const subCategories: Record<keyof typeof BOARD_TYPE, string[]> = {
    notice: [],
    full: [],
    associate: [],
    graduate: [],
    freedom: [],
  };
  const boards = Object.entries(BOARD_TYPE) as Entries<typeof BOARD_TYPE>;

  await Promise.all(
    boards.map(async ([boardKey, board]) => {
      const res = await fetch(`${API_URL}/api/board/category?board=${board}`);
      if (!res.ok) throw new Error('fetch failed');
      const { categories }: { categories: string[] } = await res.json();
      subCategories[boardKey] = categories;
      return { [board]: categories };
    }),
  );

  return subCategories;
};

async function AdminBoardPage() {
  const boardsCategories = await getAllSubCategories();

  const boardsCategoriesEntries = Object.entries(boardsCategories) as Entries<
    typeof boardsCategories
  >;

  return (
    <section className="flex flex-col gap-4">
      {boardsCategoriesEntries.map(([boardKey, subCateogories]) => (
        <BoardCard
          title={BOARD_TYPE[boardKey]}
          subCategories={subCateogories}
        />
      ))}
    </section>
  );
}

export default AdminBoardPage;
