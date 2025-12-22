import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.spacing4};
  z-index: 999;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.color.white};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.spacing6};
  max-width: 460px;
  width: 100%;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing4};
`;

export const Eyebrow = styled.span`
  font-size: ${({ theme }) => theme.text.xs.fontSize};
  font-weight: 700;
  color: ${({ theme }) => theme.color.orange700};
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

export const List = styled.ul`
  margin: 0;
  padding-left: ${({ theme }) => theme.spacing.spacing5};
  color: ${({ theme }) => theme.color.gray800};
  font-size: ${({ theme }) => theme.text.sm.fontSize};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

export const Question = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.gray900};
  font-size: ${({ theme }) => theme.text.md.fontSize};
  font-weight: 700;
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing3};
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const SecondaryButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.gray300};
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.gray800};
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease, transform 0.08s ease;

  &:hover {
    background: ${({ theme }) => theme.color.gray50};
    border-color: ${({ theme }) => theme.color.gray400};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const PrimaryButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.color.orange600};
  color: ${({ theme }) => theme.color.white};
  padding: 12px 18px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.15s ease, box-shadow 0.15s ease, transform 0.08s ease;

  &:hover {
    background: ${({ theme }) => theme.color.orange700};
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  &:active {
    transform: scale(0.98);
    background: ${({ theme }) => theme.color.orange800};
  }
`;
