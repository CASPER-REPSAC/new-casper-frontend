import styled from 'styled-components';
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineCopyrightCircle,
} from 'react-icons/ai';
import CommonCenterWrapper from '../CommonCenterWrapper';
import { FOOTER } from '@src/utils/constants';

function Footer() {
  return (
    <Wrapper>
      <Body>
        <Sns>
          <AiOutlineGithub size={30} />
          <AiOutlineFacebook size={30} />
          <AiOutlineInstagram size={30} />
        </Sns>
        <Info>
          <Span>{FOOTER.location}</Span>
          <Span>
            <AiOutlineCopyrightCircle />
            {FOOTER.copyRight}
          </Span>
        </Info>
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.surfaceAlt};
  color: ${(props) => props.theme.textDefault};
`;

const Body = styled(CommonCenterWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Sns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;
const Info = styled.div`
  font-size: 1.2rem;
  font-weight: lighter;
  display: flex;
  text-align: right;
  flex-direction: column;
`;
const Span = styled.span`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export default Footer;
