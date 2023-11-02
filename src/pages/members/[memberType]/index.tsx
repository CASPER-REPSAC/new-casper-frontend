import MembersSection from '@src/components/templates/members/MembersSection';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ALL_MEMEBER_API, API_URL } from '@src/utils/apiUrl';
import { MemberProfile } from '@src/types/memberTypes';
import MemberLayout from '@src/components/Layout/MemberLayout';
import { ReactElement } from 'react';
import { ParsedUrlQuery } from 'querystring';
import customAxios from '@src/utils/api';
import { SsrError } from '@src/types/errorTypes';
import Error from '@src/pages/_error';
import { MEMBER_TYPE } from '@src/utils/constants';

interface Props {
  memberList: MemberProfile[] | null;
  error: SsrError | null;
}

function Members({
  memberList,
  error,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (error) return <Error statusCode={error.statusCode} />;
  return <MembersSection memberList={memberList} />;
}

Members.getLayout = (page: ReactElement) => <MemberLayout>{page}</MemberLayout>;

interface Params extends ParsedUrlQuery {
  memberType: string;
}

export const getStaticPaths: GetStaticPaths = () => {
  const memberTypes = Object.keys(MEMBER_TYPE);

  const paths = memberTypes.map((memberType) => {
    return { params: { memberType } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  context,
) => {
  const { memberType } = context.params!;
  const { data, error } = await customAxios<MemberProfile[]>({
    url: `${API_URL}${ALL_MEMEBER_API}?role=${memberType}`,
  });

  return {
    props: {
      memberList: data,
      error,
    },
    revalidate: 300,
  };
};

export default Members;
