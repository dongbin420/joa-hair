import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  font-size: ${({ theme }) => theme.heading.xxl.fontSize};
  text-align: center;
`;
