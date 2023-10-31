import { SsrError } from '@src/types/errorTypes';
import { isAxiosError } from 'axios';
import { GetStaticPathsContext, GetStaticProps } from 'next';

function handleErrorStaticProps(
  getStaticProps: GetStaticProps,
): GetStaticProps {
  return async (context: GetStaticPathsContext) => {
    try {
      return await getStaticProps(context);
    } catch (e) {
      if (isAxiosError(e) && e.response) {
        const error: SsrError = {
          statusCode: e.response?.status,
          message: e.response?.statusText,
        };
        return {
          props: {
            error,
          },
        };
      }

      console.error('unhandled error', e);
      throw e;
    }
  };
}

export default handleErrorStaticProps;
