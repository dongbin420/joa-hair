import { styled, css } from 'styled-components';
import { ButtonProps } from './Button';

export const ButtonWrapper = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'customCss' && prop !== 'isSticky',
})<ButtonProps>`
  font-family: 'Inter', sans-serif;
  color: ${(props) => props.theme.color.orange600};
  background-color: transparent;
  font-size: ${(props) => props.theme.text.xl.fontSize};
  border: 2px solid ${(props) => props.theme.color.orange600};
  letter-spacing: -0.8px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.orange600};
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
      case 'xLarge':
        return css`
          padding: 20px 55px;
        `;
      case 'xxLarge':
        return css`
          padding: 25px 70px;
        `;
      default:
        return css`
          padding: 12px 35px;
        `;
    }
  }};

  padding: ${({ isSticky }) => isSticky && '8px 25px'};
  font-size: ${({ theme, isSticky }) =>
    isSticky ? theme.text.md.fontSize : theme.text.xl.fontSize};
  ${(props) => props.customCss};
`;
