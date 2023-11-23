import { Variant, Variants } from 'framer-motion';
import { DefaultTheme } from 'styled-components/dist/types';
import { ButtonColor } from './interface';

interface VariantProps {
  $color: ButtonColor;
  theme: DefaultTheme;
}

const hoverCss: Variant = ({ $color, theme }: VariantProps) => {
  const colorMap: Record<ButtonColor, string> = {
    red: theme.redHover,
    green: theme.greenHover,
    default: theme.defaultButtonHover,
  };

  return {
    scale: 1.1,
    backgroundColor: colorMap[$color],
  };
};

const tapCss: Variant = ({ $color, theme }: VariantProps) => {
  const colorMap: Record<ButtonColor, string> = {
    red: theme.redActive,
    green: theme.greenActive,
    default: theme.defaultButtonActive,
  };

  return {
    scale: 0.9,
    backgroundColor: colorMap[$color],
  };
};

const variants: Variants = {
  hover: hoverCss,
  tap: tapCss,
};

export default variants;
