import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { DefaultButtonProps } from './interface';
import { activeColorCss, fullCss, inActiveColorCss, sizeCss } from './css';
import variants from './variants';

const DefaultButton = styled(motion.button).attrs<DefaultButtonProps>(
  ({ $color, theme }) => ({
    custom: { $color, theme },
    variants,
    whileHover: 'hover',
    whileTap: 'tap',
  }),
)<DefaultButtonProps>`
  ${sizeCss};
  ${fullCss};
  ${({ $active }) => ($active ? activeColorCss : inActiveColorCss)}

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  color: ${({ theme }) => theme.textDefault};
  cursor: pointer;
`;

DefaultButton.defaultProps = {
  $size: 'medium',
  $color: 'default',
  $active: true,
};

export default DefaultButton;
