import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

function QueryWrapper({ children }: Props) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <DevToolsWrapper>
        <ReactQueryDevtools initialIsOpen={false} />
      </DevToolsWrapper>
    </QueryClientProvider>
  );
}

const DevToolsWrapper = styled.div`
  font-size: 1.6rem;
`;

export default QueryWrapper;
