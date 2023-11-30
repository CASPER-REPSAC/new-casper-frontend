import { SmallCenterWrapper } from '@src/components/common/centerWrapper';
import styled from 'styled-components';

const PageWrapper = styled(SmallCenterWrapper)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default PageWrapper;
