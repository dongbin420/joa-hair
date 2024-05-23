import * as S from './Button.styles';
import type { CSSProp } from 'styled-components';

export interface ButtonProps {
  children: string;
  size?: 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge';
  onClick?: () => void;
  customCss?: CSSProp;
}

function Button({ size, onClick, customCss, children }: ButtonProps) {
  return (
    <S.ButtonWrapper size={size} onClick={onClick} customCss={customCss}>
      {children}
    </S.ButtonWrapper>
  );
}

export default Button;
