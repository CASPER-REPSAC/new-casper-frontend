import useUserAuthUpdateMutation from '@app/_hooks/apis/admin/useUserAuthUpdateMutation';
import { Role } from '@app/_types/userTypes';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@app/_shadcn/components/ui/select';

interface Props {
  id: string;
  defaultValue: Role;
}

const SELECT_LABEL = {
  associate: '준회원',
  active: '활동중',
  rest: '휴학생',
  graduate: '졸업생',
  admin: '관리자',
} as const;

function RoleUpdateSelect({ defaultValue, id }: Props) {
  const { mutate, status } = useUserAuthUpdateMutation();

  const getColor = () => {
    switch (status) {
      case 'error':
        return 'border-destructive';
      case 'success':
        return 'border-green-300';
      case 'idle':
        return 'border';
      case 'pending':
        return 'border-yellow-400';
      default:
        return 'default';
    }
  };

  const onChange = (value: string) => {
    mutate({ id, role: value });
  };

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className={getColor()}>
        <SelectValue placeholder={SELECT_LABEL[defaultValue] || '권한'} />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(SELECT_LABEL).map(([key, label]) => (
          <SelectItem disabled={key === 'admin'} key={key} value={key}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default RoleUpdateSelect;
