import styled from 'styled-components';

export const SlotContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDisabled' && prop != 'isSelected',
})<{ isDisabled: boolean; isSelected: boolean }>`
  border: 1px solid rgb(25, 118, 210);
  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing3};
  border-radius: 4px;
  color: rgb(25, 118, 210);
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: rgba(25, 118, 210, 0.08); /* 옅은 파랑 톤 오버레이 */
    border-color: rgb(13, 87, 168);
    color: rgb(13, 87, 168);
  }

  ${({ isDisabled }) =>
    isDisabled &&
    `
    border-color: #e0e0e0;
    color: #e0e0e0;
    cursor: default;
    pointer-events: none;

    &:hover {
      background-color: transparent;
      border-color: #e0e0e0;
      color: #e0e0e0;
    }
  `}

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: rgb(25, 118, 210);
      border-color: rgb(25, 118, 210);
      color: #ffffff;

      &:hover {
        background-color: rgb(13, 87, 168);
        border-color: rgb(13, 87, 168);
        color: #ffffff;
      }
  `}
`;
