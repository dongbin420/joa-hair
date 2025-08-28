import styled from 'styled-components';

export const SelectionTitleWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

export const SelectionNum = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.color.orange600};
  color: white;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  padding-right: 2px;
  line-height: 25px;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const SelectionTitleTextWrapper = styled.div``;

export const SelectionTitle = styled.p`
  padding-top: 2.5px;
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

export const SelectedServices = styled.p`
  color: ${({ theme }) => theme.color.gray700};
  font-weight: 300;
`;
