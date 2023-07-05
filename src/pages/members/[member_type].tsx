import SideBar from "@src/components/layout/SideBar";
import PageTitle from "@src/components/layout/PageTitle";
import { useRouter } from "next/router";
import PageWrapper from "@src/components/layout/PageWrapper";
import { Cards, Main, MemberCard } from "./members.style";

function Members() {
  const router = useRouter();

  return (
    <PageWrapper>
      <PageTitle pageTitle="Members" />
      <SideBar menus={["활동 중", "휴학생", "졸업생"]} basePath="/members" />
      <Main>
        <Cards>
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </Cards>
      </Main>
    </PageWrapper>
  );
}

export default Members;
