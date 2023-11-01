import MembersSection from '@src/components/templates/members/MembersSection';
import { GetStaticPaths, GetStaticProps } from 'next';
// import axios from 'axios';
// import { ALL_MEMEBER_API, API_URL } from '@src/utils/apiUrl';
import handleErrorStaticProps from '@src/utils/handleErrorStaticProps';
import { MemberProfile } from '@src/types/memberTypes';
import MemberLayout from '@src/components/Layout/MemberLayout';
import { ReactElement } from 'react';

interface Props {
  memberList: MemberProfile[];
}

function Members({ memberList }: Props) {
  return <MembersSection memberList={memberList} />;
}

Members.getLayout = (page: ReactElement) => <MemberLayout>{page}</MemberLayout>;

export const getStaticPaths: GetStaticPaths = () => {
  const memberTypes = ['active', 'graduate'];

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
    const mockData = {
      memberList: [
        {
          id: 1,
          role: '준회원',
          name: '태정',
          nickname: 'ine',
          email: 'ine@ine.ine@',
          introduce: '나는 우태정',
          image: 'https://picsum.photos/200',
          homepage: 'https://github.com/u',
        },
        {
          id: 2,
          role: '정회원',
          name: '지성',
          nickname: 'jijiseong',
          email: 'ji@ko.ads',
          introduce: '나는 박지성',
          image: 'https://picsum.photos/210',
          homepage: 'https://github.com/@jijiseong',
        },
      ],
    };

    return {
      props: {
        memberList: mockData.memberList,
      },
    };
  },
);

export default Members;
