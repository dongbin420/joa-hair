import { styled, css } from 'styled-components';

export const AccordionHeaderContainer = styled.div<{ isOpen: boolean }>`
  img {
    width: 25px;
    height: 25px;
    transition: transform 0.2s ease-in-out;

    ${({ isOpen }) => {
      if (isOpen) {
        return css`
          transform: rotate(180deg);
        `;
      }

      return css`
        transform: rotate(90deg);
      `;
    }}
  }
`;

export const ClickAreaButton = styled.button<{ isOpen: boolean }>`
  font-family: 'Inter', sans-serif;
  display: flex;
  border: 0;
  background: none;
  align-items: center;
  width: 100%;
  padding: 15px 0;
  font-size: ${({ theme }) => theme.text.md.fontSize};
  cursor: pointer;
  color: black;

  ${({ isOpen, theme }) => {
    if (isOpen) {
      return css`
        color: ${theme.color.orange600};
      `;
    }
  }}

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.text.sm.fontSize};
    text-align: left;
  }
`;
