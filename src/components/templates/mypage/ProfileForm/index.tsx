/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import useProfile from '@src/hooks/apis/useProfile';
import { DefaultButton, DefaultForm } from '@src/components/common/defaultTag';
import {
  AvatarInput,
  LabelInput,
  LabelTextarea,
} from '@src/components/molecules/inputs';
import { INPUT_LABEL, PLACEHOLDER } from '@src/constants/label';

function ProfileForm() {
  const { register } = useForm();

  const introduceRegister = register('introduce', { required: true });
  const nameRegister = register('name', { required: true });
  const nicknameRegister = register('nickname', { required: true });
  const groupRegister = register('group', { required: true });
  const blogRegister = register('blog', { required: true });

  const { data, isLoading } = useProfile();

  if (isLoading) {
    return <>loading</>;
  }

  return (
    <Form>
      <AvatarInput register={register('avatar')} />
      <LabelTextarea
        label={INPUT_LABEL.introduce}
        register={introduceRegister}
        placeholder={PLACEHOLDER.introduce}
        autoComplete="off"
        cols={4}
      />
      <LabelInput
        label={INPUT_LABEL.name}
        register={nameRegister}
        placeholder={PLACEHOLDER.name}
        autoComplete="off"
        defaultValue={data?.data.name}
      />
      <LabelInput
        label={INPUT_LABEL.nickname}
        register={nicknameRegister}
        placeholder={PLACEHOLDER.nickname}
        autoComplete="off"
        defaultValue={data?.data.nickname}
      />
      <LabelInput
        label={INPUT_LABEL.group}
        register={groupRegister}
        placeholder={PLACEHOLDER.group}
        autoComplete="off"
        defaultValue={data?.data.role}
      />
      <LabelInput
        label={INPUT_LABEL.social}
        register={blogRegister}
        placeholder={PLACEHOLDER.social}
        autoComplete="off"
      />
      <Button full color="green">
        저장
      </Button>
    </Form>
  );
}

const Form = styled(DefaultForm)`
  gap: 2em;
  padding: 100px 0 200px;
`;

const Button = styled(DefaultButton)`
  align-self: flex-end;
  margin-top: 1em;
  width: 100%;
  height: 50px;
`;

export default ProfileForm;
