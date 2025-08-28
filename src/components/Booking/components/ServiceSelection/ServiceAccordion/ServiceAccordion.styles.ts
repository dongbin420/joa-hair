import styled from 'styled-components';

export const SelectedTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: ${({ theme }) => theme.spacing.spacing4};
  letter-spacing: -0.8px;
`;

export const SelectNote = styled.p`
  color: red;
`;
