import { styled, keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 10px;
  margin-bottom: ${({ theme }) => theme.spacing.spacing8};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing2};

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.spacing4};
  }
`;

export const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: 'Inter', sans-serif;
  background-color: ${({ theme }) => theme.color.gray800};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 110px;
  height: 40px;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray600};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.gray700};
  }
`;

export const InstagramButton = styled.button`
  font-family: 'Inter', sans-serif;
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing5};
  background-color: ${({ theme }) => theme.color.orange600};
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.orange400};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.orange500};
  }

  img {
    width: 15px;
    height: 15px;
  }
`;

export const InstagramButtonContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SeeMoreButton = styled.button`
  font-family: 'Inter', sans-serif;
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing5};
  background-color: ${({ theme }) => theme.color.orange600};
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.orange400};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.orange500};
  }
`;

export const Spinner = styled.span`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
  display: inline-block;
  position: absolute;
`;
