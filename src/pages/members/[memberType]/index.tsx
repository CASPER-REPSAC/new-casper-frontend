import { useRecoilState } from 'recoil';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ReactElement, useCallback, useState } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { MembersTemplate } from '@src/components/templates';
import { MemberLayout } from '@src/components/organism/layout';
import { MEMBER_TYPE } from 'app/_constants/mock';
import { DetailMemberCard, MemberCard } from '@src/components/organism/member';
import { detailedMemberPopupState } from 'app/_store/memberCardAtoms';
import { useAllMember } from 'app/_hooks/apis/user';
import { getAllMember } from 'app/_hooks/apis/user/useAllMember';
import { MemberProfile } from 'app/_types/memberTypes';

interface Props {
  initialData: { memberList: MemberProfile[] } | undefined;
}

interface Params extends ParsedUrlQuery {
  memberType: string;
}

export const getStaticPaths = (() => {
  const memberTypes = Object.keys(MEMBER_TYPE);

  const paths = memberTypes.map((memberType) => {
    return { params: { memberType } };
  });

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async () => {
  // const { memberType } = context.params!;
  const data = await getAllMember('all', true);

  return {
    props: {
      initialData: data,
      role: 'all',
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps<Props, Params>;

function Members({
  initialData,
  role,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useAllMember(role, initialData);
  const [selectedMember, setSelectedMember] = useState<MemberProfile | null>(
    null,
  );
  const [popupVisible, setPopupVisible] = useRecoilState(
    detailedMemberPopupState,
  );

  const openDetailPopup = useCallback(
    (member: MemberProfile) => {
      setPopupVisible(true);
      setSelectedMember(member);
    },
    [setPopupVisible, setSelectedMember],
  );

  return (
    <MembersTemplate
      popupSection={
        selectedMember && popupVisible ? (
          <DetailMemberCard selectedMember={selectedMember} />
        ) : (
          <></>
        )
      }
      memberGridSection={
        <>
          {data?.memberList.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              onClick={() => openDetailPopup(member)}
            />
          ))}
        </>
      }
    />
  );
}

Members.getLayout = (page: ReactElement) => <MemberLayout>{page}</MemberLayout>;

export default Members;
