'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@app/_shadcn/components/ui/card';
import { Label } from '@app/_shadcn/components/ui/label';
import { Input } from '@app/_shadcn/components/ui/input';
import { Textarea } from '@app/_shadcn/components/ui/textarea';
import { Button } from '@app/_shadcn/components/ui/button';
import { SaveIcon } from 'lucide-react';
import { useSubmissionDetail } from '@app/_hooks/apis/assignment/useSubmission';
import { useParams } from 'next/navigation';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';

function FeedbackSection() {
  const { data: myInfo } = useMyInfo();
  const { assignmentId, submitId } = useParams<{
    assignmentId: string;
    submitId: string;
  }>();
  const { data } = useSubmissionDetail({
    assignmentId: Number(assignmentId),
    submitId: Number(submitId),
  });

  if (!myInfo || myInfo?.role === 'associate') {
    return null;
  }
  if (!data) return null;

  const handleScoreChange = () => {};

  const handleFeedbackChange = () => {};

  const handleSave = () => {};

  return (
    <Card>
      <CardHeader>
        <CardTitle>피드백</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Label htmlFor="score" className="font-semibold">
            점수
          </Label>
          <Input
            id="score"
            type="number"
            value={data.submit.score ?? 0}
            onChange={handleScoreChange}
            min={0}
            max={100}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="feedback" className="font-semibold">
            피드백
          </Label>
          <Textarea
            id="feedback"
            value={data.submit.feedback ?? ''}
            onChange={handleFeedbackChange}
            placeholder="학생에게 피드백을 입력하세요..."
            rows={4}
          />
        </div>

        <Button onClick={handleSave} className="w-full">
          <SaveIcon className="mr-2 h-4 w-4" />
          점수 및 피드백 저장
        </Button>
      </CardContent>
    </Card>
  );
}

export default FeedbackSection;
