'use client';

import { UserIcon } from 'app/_components/icons';
import { styled } from 'styled-components';

const StyledUserIcon = styled(UserIcon)`
  color: ${({ theme }) => theme.surfaceDefault};
`;

export default StyledUserIcon;
