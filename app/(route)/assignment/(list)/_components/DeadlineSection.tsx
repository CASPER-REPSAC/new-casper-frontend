'use client';

import { formatDate } from 'date-fns';
import { CalendarIcon, XCircleIcon } from 'lucide-react';
import { Badge } from '@app/_shadcn/components/ui/badge';

function DeadlineSection({
  deadline,
  isEnded,
}: {
  deadline: string;
  isEnded: boolean;
}) {
  return (
    <div className="flex items-center text-sm">
      <CalendarIcon className="mr-2 h-4 w-4" />
      {formatDate(deadline, 'yyyy-MM-dd HH:mm')} 마감
      {isEnded && (
        <Badge variant="secondary" className="ml-2">
          <XCircleIcon className="mr-1 h-3 w-3" />
          마감됨
        </Badge>
      )}
    </div>
  );
}

export default DeadlineSection;
