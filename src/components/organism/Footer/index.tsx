import styled from 'styled-components';

import CommonCenterWrapper from '@src/components/common/CommonCenterWrapper';
import { FOOTER, ICON_SIZE } from '@src/utils/constants';
import {
  CopyrightIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
} from '@src/components/common/Icons';

function Footer() {
  return (
    <Wrapper>
      <Body>
        <Sns>
          <GithubIcon size={ICON_SIZE.medium} />
          <FacebookIcon size={ICON_SIZE.medium} />
          <InstagramIcon size={ICON_SIZE.medium} />
        </Sns>
        <Info>
          <Span>{FOOTER.location}</Span>
          <Span>
            <CopyrightIcon />
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
  margin-top: 100px;
`;

const Body = styled(CommonCenterWrapper)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
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
