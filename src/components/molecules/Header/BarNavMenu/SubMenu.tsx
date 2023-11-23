import { styled } from 'styled-components';
import Link from 'next/link';
import { DefaultButton } from '@src/components/common/defaultTag';

interface Props {
  title: string;
  href: string;
}

function SubMenu({ title, href }: Props) {
  return (
    <Wrapper href={href}>
      <DefaultButton $full>{title}</DefaultButton>
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  text-decoration-line: none;
`;

export default SubMenu;
