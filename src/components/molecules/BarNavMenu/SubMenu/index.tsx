import DefaultButton from '@src/components/common/DefaultButton';
import { useRouter } from 'next/router';
import { styled } from 'styled-components';

interface Props {
  title: string;
  href: string;
}

function SubMenu({ title, href }: Props) {
  const { push } = useRouter();
  const onClick = () => push(href);
  return <Wrapper onClick={onClick}>{title}</Wrapper>;
}

const Wrapper = styled(DefaultButton)``;

export default SubMenu;
