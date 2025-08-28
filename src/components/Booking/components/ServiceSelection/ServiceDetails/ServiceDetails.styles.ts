import styled from 'styled-components';
import { MinusGray, MinusRed, PlusGray, PlusBlue } from '@/assets/imgs/svg/index';

export const ServiceDetailsContainer = styled.div`
  overflow-y: auto;
  max-height: 300px;

  > div:not(:last-child) {
    border-bottom: 1px solid #ccc; /* 마지막 요소를 제외한 경계선 추가 */
  }
`;

export const ServiceContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.spacing2};
  align-items: center;
`;

export const ServiceTextWrapper = styled.div``;

export const ServiceTitle = styled.p`
  font-weight: 300;
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

export const ServiceTime = styled.p`
  font-weight: 300;
  color: ${({ theme }) => theme.color.gray600};
  font-size: ${({ theme }) => theme.text.sm.fontSize};
`;

export const ServiceSelectWrapper = styled.div``;

export const ServiceSelectButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<{ isSelected: boolean }>`
  position: relative;
  background-color: white;
  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing4};
  color: #1976d2;
  border-radius: 0 5px 5px 0;
  border: 0.5px solid ${({ isSelected, theme }) => (isSelected ? theme.color.gray300 : '#1976d2')};
  cursor: ${({ isSelected }) => (isSelected ? 'auto' : 'pointer')};

  /* 호버 상태 */
  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? 'white' : '#BBDEFB')};
    color: ${({ isSelected, theme }) => (isSelected ? theme.color.gray300 : '#1976d2')};
  }

  /* 클릭 상태 */
  &:active {
    background-color: ${({ isSelected }) => (isSelected ? 'white' : '#90CAF9')};
  }
`;

export const Badge = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<{ isSelected: boolean }>`
  position: absolute;
  top: -8px; /* 버튼 오른쪽 위에 걸쳐서 위치 */
  right: -8px; /* 버튼 오른쪽 위에 걸쳐서 위치 */
  width: 20px; /* 원 크기 */
  height: 20px;
  background-color: #1976d2; /* 파란색 */
  color: white; /* 숫자 색상 */
  border-radius: 50%; /* 원 모양 */
  display: ${({ isSelected }) => (isSelected ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;

export const ServiceDeleteButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<{ isSelected: boolean }>`
  background-color: white;
  border-right: none;
  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing4};
  color: ${({ theme }) => theme.color.gray300};
  border-radius: 5px 0 0 5px;
  border: 0.5px solid ${({ isSelected, theme }) => (isSelected ? '#D32F2F' : theme.color.gray300)};
  cursor: ${({ isSelected }) => (isSelected ? 'pointer' : 'auto')};

  /* 호버 상태 */
  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? '#FFCDD2' : 'white')};
    color: ${({ isSelected, theme }) => (isSelected ? '#D32F2F' : theme.color.gray300)};
  }

  /* 클릭 상태 */
  &:active {
    background-color: ${({ isSelected }) => (isSelected ? '#EB8686' : 'white')};
  }
`;

export const StyledMinusGray = styled(MinusGray)`
  width: 20px;
  height: 20px;
`;

export const StyledMinusRed = styled(MinusRed)`
  width: 20px;
  height: 20px;
`;

export const StyledPlusGray = styled(PlusGray)`
  width: 20px;
  height: 20px;
`;

export const StyledPlusBlue = styled(PlusBlue)`
  width: 20px;
  height: 20px;
`;
