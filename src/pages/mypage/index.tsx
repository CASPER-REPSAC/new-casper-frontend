import PageTitle from '@src/components/layout/PageTitle/PageTitle';
import PageWrapper from '@src/components/layout/PageWrapper/PageWrapper';
import { useForm } from 'react-hook-form';
import {
  Avatar,
  AvatarLabel,
  Button,
  Div,
  FlexCol,
  FlexRow,
  Form,
  Input,
  IntroInput,
  Label,
} from './mypage.style';

function MyPage() {
  const { register } = useForm();
  return (
    <PageWrapper>
      <PageTitle pageTitle="MyPage" />
      <Form>
        <FlexRow>
          <FlexCol>
            <AvatarLabel htmlFor="avatar">이미지 변경하기</AvatarLabel>
            <Avatar type="file" name="avatar" id="avatar" />
            <Div>
              <Label htmlFor="introduce">소개글</Label>
              <IntroInput
                id="introduce"
                {...register('introduce', { required: true })}
                placeholder="소개글"
                rows={4}
                cols={33}
              />
            </Div>
          </FlexCol>
          <FlexCol>
            <Div>
              <Label htmlFor="name">이름</Label>
              <Input
                id="name"
                {...register('name', { required: true })}
                type="text"
                placeholder="이름"
                autoComplete={'off'}
              />
            </Div>
            <Div>
              <Label htmlFor="nickname">닉네임</Label>
              <Input
                id="nickname"
                {...register('nickname', { required: true })}
                type="text"
                placeholder="닉네임"
                autoComplete={'off'}
              />
            </Div>
            <Div>
              <Label htmlFor="group">회원 그룹</Label>
              <Input
                id="group"
                {...register('group', { required: true })}
                type="text"
                placeholder="회원그룹"
                autoComplete={'off'}
              />
            </Div>
            <Div>
              <Label htmlFor="github">소셜 정보</Label>
              <Input
                id="github"
                {...register('github', { required: true })}
                type="text"
                placeholder="http://github.com/example"
                autoComplete={'off'}
              />
              <Input
                id="blog"
                {...register('blog', { required: true })}
                type="text"
                placeholder="http://blog.example.com"
                autoComplete={'off'}
              />
            </Div>
          </FlexCol>
        </FlexRow>
        <Button>저장</Button>
      </Form>
    </PageWrapper>
  );
}

export default MyPage;
