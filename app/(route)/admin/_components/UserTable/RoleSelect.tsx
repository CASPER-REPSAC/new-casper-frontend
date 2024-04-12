import { roleState } from '@app/_store/adminAtoms';
import { Select, SelectItem } from '@nextui-org/react';
import { ChangeEventHandler } from 'react';
import { useRecoilState } from 'recoil';

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
  const [role, setRole] = useRecoilState(roleState);

  const onChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setRole(e.target.value);
  };

  return (
    <Select
      label="권한"
      className="w-32"
      defaultSelectedKeys={[role]}
      onChange={onChange}
    >
      {ROLES.map(({ key, label }) => (
        <SelectItem key={key} value={key}>
          {label}
        </SelectItem>
      ))}
    </Select>
  );
}

export default RoleSelect;
