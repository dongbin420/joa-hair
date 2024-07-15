import { styled, keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65vh;
`;

export const Spinner = styled.div`
  border: 5px solid rgba(254, 80, 0, 0.3);
  border-top: 5px solid ${({ theme }) => theme.color.orange600};
  border-radius: 50%;
  width: 90px;
  height: 90px;
  animation: ${spin} 1s linear infinite;
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.spacing10};
`;
