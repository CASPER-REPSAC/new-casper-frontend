import useUserAuthUpdateMutation from '@app/_hooks/apis/admin/useUserAuthUpdateMutation';
import { Select, SelectItem } from '@nextui-org/react';
import { ChangeEventHandler } from 'react';

interface Props {
  id: string;
  defaultValue: string;
}

const ROLES = [
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

function RoleUpdateSelect({ defaultValue, id }: Props) {
  const { mutate, status } = useUserAuthUpdateMutation();

  const getColor = () => {
    switch (status) {
      case 'error':
        return 'danger';
      case 'success':
        return 'success';
      case 'idle':
        return 'default';
      case 'pending':
        return 'warning';
      default:
        return 'default';
    }
  };

  const onChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { value } = e.target;
    mutate({ id, role: value });
  };

  return (
    <Select
      disallowEmptySelection
      size="sm"
      color={getColor()}
      classNames={{ base: 'w-24' }}
      defaultSelectedKeys={[defaultValue]}
      isDisabled={defaultValue === 'admin'}
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

export default RoleUpdateSelect;
