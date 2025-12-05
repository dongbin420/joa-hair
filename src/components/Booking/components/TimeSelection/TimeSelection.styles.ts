import styled from 'styled-components';

export const DateTitle = styled.div`
  font-size: ${({ theme }) => theme.text.xl.fontSize};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
`;

export const TimeSlotContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;

export const EmptyMessage = styled.div`
  flex: 1 0 100%;
  color: #9e9e9e;
  text-align: center;
`;
