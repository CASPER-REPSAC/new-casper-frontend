import { Button } from '@app/_shadcn/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@app/_shadcn/components/ui/card';

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
                <div
                  className="flex items-center gap-2 rounded border bg-slate-200 px-4 py-2"
                  key={category}
                >
                  <span>{category}</span>
                  <Button size="sm" variant="secondary">
                    수정
                  </Button>
                  <Button size="sm" variant="destructive">
                    삭제
                  </Button>
                </div>
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
