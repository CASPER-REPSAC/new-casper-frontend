import { useSetAtom } from 'jotai';
import { roleState } from '@app/_store/adminAtoms';
import { Role } from '@app/_types/userTypes';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@app/_shadcn/components/ui/select';

const ROLES = [
  {
    key: 'all',
    label: '전체',
  },
  {
    key: 'associate',
    label: '준회원',
  },
  {
    key: 'active',
    label: '활동중',
  },
  {
    key: 'rest',
    label: '휴학생',
  },
  {
    key: 'graduate',
    label: '졸업생',
  },
];

function RoleSelect() {
  const setRole = useSetAtom(roleState);

  const onValueChange = (value: string) => {
    setRole(value as Role);
  };

  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-24">
        <SelectValue placeholder="권한" />
      </SelectTrigger>
      <SelectContent>
        {ROLES.map(({ key, label }) => (
          <SelectItem key={key} value={key}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default RoleSelect;
