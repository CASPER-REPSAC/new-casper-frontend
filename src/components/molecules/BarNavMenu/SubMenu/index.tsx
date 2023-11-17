import DefaultButton from '@src/components/common/DefaultButton';
import Link from 'next/link';
import { styled } from 'styled-components';

interface Props {
  title: string;
  href: string;
}

function SubMenu({ title, href }: Props) {
  return (
    <Wrapper href={href}>
      <DefaultButton>{title}</DefaultButton>
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  text-decoration-line: none;
`;

export default SubMenu;
