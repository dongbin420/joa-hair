import { styled } from 'styled-components';

interface InformationTextProps {
  title?: boolean;
  lastText?: boolean;
}

export const ContactBoxContainer = styled.div`
  width: 100%;
  display: flex;
  padding: ${(props) => props.theme.spacing.spacing11} ${(props) => props.theme.spacing.spacing9};
  gap: ${({ theme }) => theme.spacing.spacing4};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.spacing10};
    padding: ${(props) => props.theme.spacing.spacing11} 0;
  }
`;

export const InformationWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InformationTitle = styled.p`
  font-size: ${({ theme }) => theme.text.xl.fontSize};
  font-weight: 500;
  margin: ${({ theme }) => theme.spacing.spacing6} 0;
`;

export const InformationText = styled.p<InformationTextProps>`
  font-weight: ${({ title }) => (title ? 700 : 400)};
  margin-bottom: ${({ lastText, theme }) => (lastText ? 0 : theme.spacing.spacing2)};
`;

export const InformationLink = styled.a`
  &:hover {
    color: ${({ theme }) => `${theme.color.orange600}`};
  }
`;
