import { styled, css } from 'styled-components';
import { ButtonProps } from './Button';

export const Button = styled.button<ButtonProps>`
  font-family: 'Inter', sans-serif;
  color: ${(props) => props.theme.color.orange400};
  background-color: transparent;
  font-size: ${(props) => props.theme.text.xl.fontSize};
  border: 2px solid ${(props) => props.theme.color.orange400};
  letter-spacing: -0.8px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.orange400};
    color: ${(props) => props.theme.color.white};
  }

  ${(props) => {
    switch (props.size) {
      case 'small':
        return css`
          padding: 8px 25px;
        `;
      case 'medium':
        return css`
          padding: 12px 35px;
        `;
      case 'large':
        return css`
          padding: 16px 45px;
        `;
      default:
        return css`
          padding: 12px 35px;
        `;
    }
  }};

  ${(props) => props.css}
`;
