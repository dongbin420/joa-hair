import { styled } from 'styled-components';

export const ErrorPageContainer = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing4};
`;
