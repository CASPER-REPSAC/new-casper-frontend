export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'red' | 'green' | 'default';

export interface DefaultButtonProps {
  $size?: ButtonSize;
  $full?: boolean;
  $color?: ButtonColor;
  $active?: boolean;
}
