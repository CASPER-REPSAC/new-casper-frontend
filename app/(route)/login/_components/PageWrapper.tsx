import { SmallCenterWrapper } from 'app/_components/centerWrapper';
import styled from 'styled-components';

const PageWrapper = styled(SmallCenterWrapper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default PageWrapper;
