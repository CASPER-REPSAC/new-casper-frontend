import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineCopyrightCircle,
} from 'react-icons/ai';
import { Info, Sns, Span, Wrapper } from './Footer.style';

function Footer() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default Footer;
