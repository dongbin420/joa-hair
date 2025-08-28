import styled from 'styled-components';

export const ServiceContentWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing6};
  margin-left: ${({ theme }) => theme.spacing.spacing3};
  margin-top: ${({ theme }) => theme.spacing.spacing2};
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
  padding-left: ${({ theme }) => theme.spacing.spacing4};

  // 펼치고 닫기
  border-left: ${({ theme }) => `1px solid ${theme.color.gray500}`};
  padding-bottom: ${({ theme, isActive }) => (isActive ? `${theme.spacing.spacing6}` : '0')};
  max-height: ${({ isActive }) => (isActive ? '120vh' : 0)};
  overflow-y: ${({ isActive }) => (isActive ? 'auto' : 'hidden')};
  transition: max-height 0.5s ease;

  // 아코디언 클릭 등 이벤트 동작 안되게 막기
  pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};
`;
