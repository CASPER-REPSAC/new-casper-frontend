import { MouseEventHandler } from 'react';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { Variants, motion } from 'framer-motion';
import { DefaultHr, LinkButton } from 'app/_components/common/';
import { LoginIcon, LogoutIcon, UserIcon } from 'app/_components/icons';
import { loginState } from 'app/_store/permissionAtoms';
import { useLogoutMutation } from 'app/_hooks/apis/user';
import { PATH } from 'app/_constants/urls';

interface Props {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function HambergerNavigation({ onClick }: Props) {
  const isLogin = useRecoilValue(loginState);
  const { mutate: mutateLogout } = useLogoutMutation();

  const logout = () => {
    mutateLogout();
  };

  return (
    <FakeBackground
      variants={variants}
      initial="hidden"
      exit="hidden"
      animate="visible"
      onClick={onClick}
    >
      <Menu onClick={(e) => e.stopPropagation()}>
        {isLogin ? (
          <>
            <LinkButton href={`${PATH.user.mypage.url}`}>
              <UserIcon />
            </LinkButton>
            <LogoutButton type="button" onClick={logout}>
              <LogoutIcon />
            </LogoutButton>
          </>
        ) : (
          <LinkButton href={`${PATH.user.login.url}`}>
            <LoginIcon />
          </LinkButton>
        )}
        <Hr />
        <PointText>게시판</PointText>
        <Hr />
        <LinkButton href={`${PATH.boards.notice.url}/list/1`}>
          {PATH.boards.notice.name}
        </LinkButton>
        <LinkButton href={`${PATH.boards.full.url}/list/1`}>
          {PATH.boards.full.name}
        </LinkButton>
        <LinkButton href={`${PATH.boards.associate.url}/list/1`}>
          {PATH.boards.associate.name}
        </LinkButton>
        <LinkButton href={`${PATH.boards.graduate.url}/list/1`}>
          {PATH.boards.graduate.name}
        </LinkButton>
        <Hr />

        <PointText>멤버</PointText>
        <Hr />
        <LinkButton href={`${PATH.members.active.url}`}>
          {PATH.members.active.name}
        </LinkButton>
        <LinkButton href={`${PATH.members.graduate.url}`}>
          {PATH.members.graduate.name}
        </LinkButton>
        <LinkButton href={`${PATH.members.rest.url}`}>
          {PATH.members.rest.name}
        </LinkButton>
      </Menu>
    </FakeBackground>
  );
}

const variants: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
    },
  },
  hidden: { x: '-100vw', opacity: 0 },
};

const Menu = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 100vh;
  margin: 0;
  font-size: 2rem;
  padding: 0;
  padding-top: 40px;
  gap: 20px;
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(15px);
  z-index: 3;
`;

const FakeBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
`;
const PointText = styled.div`
  font-weight: bold;
  font-size: 3rem;
`;
const Hr = styled(DefaultHr)`
  width: 20%;
  margin: 0;
`;

const LogoutButton = styled.button`
  color: ${({ theme }) => theme.textDefault};
`;

export default HambergerNavigation;
