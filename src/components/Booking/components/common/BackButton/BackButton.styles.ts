import styled from 'styled-components';

export const ButtonContainer = styled.div``;

export const BackButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive?: boolean }>`
  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing6};
  background-color: ${({ theme }) => theme.color.white};
  color: #d32f2f;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.text.sm.fontSize};
  font-weight: 400;
  cursor: pointer;
  border: 1px solid #d32f2f;

  &:hover {
    background-color: #ffebee;
    border-color: #c62828;
  }

  &:active {
    background-color: #ffcdd2;
    border-color: #c62828;
    transform: scale(0.98);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`;
