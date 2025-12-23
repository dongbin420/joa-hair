import styled from 'styled-components';

export const Container = styled.section`
  max-width: 720px;
  margin: 80px auto;
  padding: ${({ theme }) => theme.spacing.spacing6};
  background: ${({ theme }) => theme.color.white};
  border-radius: 16px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing4};
`;

export const Badge = styled.span`
  align-self: flex-start;
  background: ${({ theme }) => theme.color.orange50};
  color: ${({ theme }) => theme.color.orange700};
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.text.xl.fontSize};
  color: ${({ theme }) => theme.color.gray900};
`;

export const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.gray700};
  line-height: 1.6;
`;

export const Section = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing4};
  border: 1px solid ${({ theme }) => theme.color.gray200};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing3};
  background: ${({ theme }) => theme.color.gray50};
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.text.md.fontSize};
  color: ${({ theme }) => theme.color.gray900};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.spacing3};
  flex-wrap: wrap;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.color.gray600};
  font-weight: 600;
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.color.gray900};
  font-weight: 600;
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing3};
  flex-wrap: wrap;
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
