import { styled } from 'styled-components';

interface InformationTextProps {
  title?: boolean;
  lastText?: boolean;
  link?: boolean;
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
  text-decoration: ${({ link }) => (link ? 'underline' : 'none')};

  &:hover {
    color: ${({ theme, link }) => (link ? theme.color.orange600 : 'black')};
  }
`;

export const IconLink = styled.a``;

export const IconWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.spacing3};
  margin-top: ${(props) => props.theme.spacing.spacing2};
`;

export const Icon = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

export const InformationLink = styled.a`
  &:hover {
    color: ${({ theme }) => `${theme.color.orange600}`};
  }
`;
