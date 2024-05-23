import { Button } from '@app/_shadcn/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@app/_shadcn/components/ui/card';
import SubCategoryCard from './BoardCard/SubCategoryCard';

interface Props {
  title: string;
  subCategories: string[];
}

function BoardCard({ title, subCategories }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 ">
          {subCategories.length === 0
            ? '소분류가 없어요.'
            : subCategories.map((category) => (
                <SubCategoryCard
                  key={category}
                  boardName={title}
                  category={category}
                />
              ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">추가</Button>
      </CardFooter>
    </Card>
  );
}

export default BoardCard;
