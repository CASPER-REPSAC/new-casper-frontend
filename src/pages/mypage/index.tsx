import PageTitle from '@src/components/Layout/PageTitle/PageTitle';
import CommonCenterWrapper from '@src/components/Layout/CommonCenterWrapper/CommonCenterWrapper';
import { useForm } from 'react-hook-form';
import {
  Avatar,
  AvatarLabel,
  Button,
  Div,
  FlexCol,
  FlexRow,
  Form,
  IntroInput,
  Label,
} from './mypage.style';
import Input from '@src/components/Input/Input';

function MyPage() {
  const { register } = useForm();
  console.log('test');

  return (
    <>
      <PageTitle pageTitle="MyPage" />
      <CommonCenterWrapper>
        <Form>
          <FlexRow>
            <FlexCol>
              <AvatarLabel htmlFor="avatar">이미지 변경하기</AvatarLabel>
              <Avatar
                register={register('avatar')}
                type="file"
                name="avatar"
                id="avatar"
              />
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
                  register={register('name', { required: true })}
                  type="text"
                  placeholder="이름"
                  autoComplete={'off'}
                />
              </Div>
              <Div>
                <Label htmlFor="nickname">닉네임</Label>
                <Input
                  id="nickname"
                  register={register('nickname', { required: true })}
                  type="text"
                  placeholder="닉네임"
                  autoComplete={'off'}
                />
              </Div>
              <Div>
                <Label htmlFor="group">회원 그룹</Label>
                <Input
                  id="group"
                  register={register('group', { required: true })}
                  type="text"
                  placeholder="회원그룹"
                  autoComplete={'off'}
                />
              </Div>
              <Div>
                <Label htmlFor="github">소셜 정보</Label>
                <Input
                  id="github"
                  register={register('github', { required: true })}
                  type="text"
                  placeholder="http://github.com/example"
                  autoComplete={'off'}
                />
                <Input
                  id="blog"
                  register={register('blog', { required: true })}
                  type="text"
                  placeholder="http://blog.example.com"
                  autoComplete={'off'}
                />
              </Div>
            </FlexCol>
          </FlexRow>
          <Button>저장</Button>
        </Form>
      </CommonCenterWrapper>
    </>
  );
}

export default MyPage;
