import styled from 'styled-components';

export const SummaryCard = styled.div`
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
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;

export const Title = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.gray900};
  font-size: ${({ theme }) => theme.text.lg.fontSize};
  font-weight: 700;
`;

export const LocationBadge = styled.span`
  padding: ${({ theme }) => theme.spacing.spacing1} ${({ theme }) => theme.spacing.spacing3};
  border-radius: 999px;
  background-color: ${({ theme }) => theme.color.orange50};
  color: ${({ theme }) => theme.color.orange700};
  border: 1px solid ${({ theme }) => theme.color.orange200};
  font-weight: 600;
  font-size: ${({ theme }) => theme.text.xs.fontSize};
  letter-spacing: 0.3px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.color.gray600};
  font-size: ${({ theme }) => theme.text.xs.fontSize};
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

export const ValueRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing3};
  flex-wrap: wrap;
`;

export const PrimaryValue = styled.span`
  color: ${({ theme }) => theme.color.gray900};
  font-size: ${({ theme }) => theme.text.lg.fontSize};
  font-weight: 600;
`;

export const Pill = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'isFilled',
})<{ isFilled?: boolean }>`
  padding: ${({ theme }) => theme.spacing.spacing1} ${({ theme }) => theme.spacing.spacing3};
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.color.gray300};
  background-color: ${({ isFilled, theme }) =>
    isFilled ? theme.color.orange25 : theme.color.gray100};
  color: ${({ isFilled, theme }) => (isFilled ? theme.color.orange700 : theme.color.gray700)};
  font-weight: 600;
  font-size: ${({ theme }) => theme.text.xs.fontSize};
`;

export const ServicesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

export const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing1};
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.orange600};
  font-weight: 600;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.spacing1};
`;

export const ToggleIcon = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
  width: 14px;
  height: 14px;
  transition: transform 0.2s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(0deg)' : 'rotate(90deg)')};
`;

export const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

export const ServicePill = styled.span`
  padding: ${({ theme }) => theme.spacing.spacing1} ${({ theme }) => theme.spacing.spacing3};
  border-radius: 999px;
  background-color: ${({ theme }) => theme.color.gray100};
  color: ${({ theme }) => theme.color.gray800};
  font-size: ${({ theme }) => theme.text.xs.fontSize};
  border: 1px solid ${({ theme }) => theme.color.gray200};
`;

export const MorePill = styled(ServicePill)`
  background-color: ${({ theme }) => theme.color.orange50};
  color: ${({ theme }) => theme.color.orange700};
  border-color: ${({ theme }) => theme.color.orange100};
  font-weight: 600;
`;

export const EmptyMessage = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.gray700};
  font-size: ${({ theme }) => theme.text.sm.fontSize};
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray200};
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

export const DurationText = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.color.gray900};
  font-size: ${({ theme }) => theme.text.lg.fontSize};
`;
