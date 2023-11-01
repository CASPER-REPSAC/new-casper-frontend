import MembersSection from '@src/components/templates/members/MembersSection';
import { GetStaticPaths, GetStaticProps } from 'next';
// import axios from 'axios';
// import { ALL_MEMEBER_API, API_URL } from '@src/utils/apiUrl';
import handleErrorStaticProps from '@src/utils/handleErrorStaticProps';
import { MemberProfile } from '@src/types/memberTypes';
import MemberLayout from '@src/components/Layout/MemberLayout';
import { ReactElement } from 'react';
import data from '@src/utils/mockdata';

interface Props {
  memberList: MemberProfile[];
}

function Members({ memberList }: Props) {
  return <MembersSection memberList={memberList} />;
}

Members.getLayout = (page: ReactElement) => <MemberLayout>{page}</MemberLayout>;

export const getStaticPaths: GetStaticPaths = () => {
  const memberTypes = ['active', 'graduate', 'rest'];

  const paths = memberTypes.map((memberType) => {
    return { params: { memberType } };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = handleErrorStaticProps(
  async () => {
    // const { data } = await axios.get(`${API_URL}${ALL_MEMEBER_API}`);

    return {
      props: {
        memberList: data.memberList,
      },
    };
  },
);

export default Members;
