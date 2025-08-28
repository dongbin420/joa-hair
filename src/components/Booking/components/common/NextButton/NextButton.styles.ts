import styled from 'styled-components';

export const ButtonContainer = styled.div``;

export const NextButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive?: boolean }>`
  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing6};
  background-color: ${({ isActive, theme }) => (isActive ? '#1976d2' : theme.color.gray300)};
  color: ${({ isActive, theme }) => (isActive ? 'white' : theme.color.gray500)};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.text.sm.fontSize};
  font-weight: 400;
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};

  ${({ isActive }) =>
    isActive &&
    `
      &:hover {
        background-color: #1565c0; 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
      }
      
      &:active {
        background-color: #1d73ce; 
        transform: scale(0.98); 
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); 
      }
    `}
`;
