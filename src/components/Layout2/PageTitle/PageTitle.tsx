import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Sub, Title, Wrapper } from './PageTitle.style';

interface pageTitleProps {
  pageTitle: string;
}

function PageTitle({ pageTitle }: pageTitleProps) {
  const router = useRouter();

  const path = router.asPath.replaceAll('/', ' > ');

  return (
    <Wrapper>
      <Title>{pageTitle}</Title>
      <Sub>
        {'홈'}
        {path}
      </Sub>
    </Wrapper>
  );
}

export default PageTitle;
