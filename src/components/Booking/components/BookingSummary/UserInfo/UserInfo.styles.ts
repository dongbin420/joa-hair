import styled, { css } from 'styled-components';

export const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.color.gray400};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing.spacing6};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing5};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing1};
`;

export const Title = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.gray900};
  font-size: ${({ theme }) => theme.text.lg.fontSize};
  font-weight: 700;
`;

export const Subtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.gray700};
  font-size: ${({ theme }) => theme.text.sm.fontSize};
  font-weight: 400;
`;

export const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.spacing5};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.gray800};
  font-size: ${({ theme }) => theme.text.xs.fontSize};
  font-weight: 600;
  letter-spacing: 0.2px;
`;

const inputBase = css`
  width: 100%;
  padding: 12px 14px;
  border-radius: 6px;
  border: 1px solid #d6d6d6;
  background-color: #fafafa;
  color: #1f1f1f;
  font-size: 15px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;

  &::placeholder {
    color: #9e9e9e;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.orange600};
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.orange25};
  }
`;

export const Input = styled.input`
  ${inputBase}
`;

export const TextArea = styled.textarea`
  ${inputBase}
  min-height: 110px;
  resize: vertical;
`;

export const InlineFieldRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing2};
  align-items: stretch;
  flex-wrap: wrap;
`;

export const CodeRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing2};
  align-items: stretch;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing.spacing2};
`;

export const SecondaryButton = styled.button`
  padding: 12px 14px;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) => theme.color.orange600};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.text.xs.fontSize};
  font-weight: 700;
  cursor: pointer;
  min-width: 120px;
  transition: background-color 0.15s ease, box-shadow 0.15s ease, transform 0.08s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.color.orange700};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
    background-color: ${({ theme }) => theme.color.orange800};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray300};
    color: ${({ theme }) => theme.color.gray600};
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const ErrorText = styled.span`
  color: #d32f2f;
  font-size: ${({ theme }) => theme.text.xs.fontSize};
  margin-top: -4px;
`;

export const HelperStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;

export const TimerRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing2};
  flex-wrap: wrap;
`;

export const HelperText = styled.span`
  color: ${({ theme }) => theme.color.gray700};
  font-size: ${({ theme }) => theme.text.xs.fontSize};
`;

export const TimerText = styled.span`
  color: ${({ theme }) => theme.color.gray700};
  font-size: ${({ theme }) => theme.text.xs.fontSize};
  font-weight: 600;
`;

export const SuccessText = styled.span`
  color: #2e7d32;
  font-size: ${({ theme }) => theme.text.xs.fontSize};
  font-weight: 700;
`;

export const SubmitButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive?: boolean }>`
  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing6};
  background-color: ${({ isActive, theme }) => (isActive ? '#1976d2' : theme.color.gray300)};
  color: ${({ isActive, theme }) => (isActive ? 'white' : theme.color.gray500)};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.text.sm.fontSize};
  font-weight: 600;
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
  border: none;
  transition: background-color 0.15s ease, box-shadow 0.15s ease, transform 0.08s ease;

  ${({ isActive }) =>
    isActive &&
    `
      &:hover {
        background-color: #1565c0; 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
      }
      
      &:active {
        background-color: #1d73ce; 
        transform: scale(0.98); 
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); 
      }
    `}
`;
