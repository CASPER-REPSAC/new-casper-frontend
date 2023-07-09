import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineCopyrightCircle,
} from 'react-icons/ai';
import { Body, Info, Sns, Span, Wrapper } from './Footer.style';
import CommonCenterWrapper from '../CommonCenterWrapper/CommonCenterWrapper';

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
          <Span>창원대학교 51호관 113호</Span>
          <Span>
            <AiOutlineCopyrightCircle />
            2023. Casper All rights reserved.
          </Span>
        </Info>
      </Body>
    </Wrapper>
  );
}

export default Footer;
