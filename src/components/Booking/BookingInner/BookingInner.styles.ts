import styled from 'styled-components';

export const BookingContainer = styled.form`
  border: 1px solid ${({ theme }) => theme.color.gray500};
  border-radius: 3px;
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: white;
`;

export const StepButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;
