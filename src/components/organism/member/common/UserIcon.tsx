import { UserIcon } from '@src/components/common/icons';
import { styled } from 'styled-components';

const StyledUserIcon = styled(UserIcon)`
  color: ${({ theme }) => theme.surfaceDefault};
`;

export default StyledUserIcon;
