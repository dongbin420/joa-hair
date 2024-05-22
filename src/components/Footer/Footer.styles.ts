import { styled } from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  padding: ${({ theme }) =>
    `${theme.spacing.spacing8} ${theme.spacing.spacing10} ${theme.spacing.spacing13}`};
  background-color: ${(props) => props.theme.color.white};
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.spacing7};
`;

export const ContactTitle = styled.p`
  font-size: ${({ theme }) => `${theme.heading.sm.fontSize}`};
  margin-bottom: ${({ theme }) => `${theme.spacing.spacing6}`};
`;

export const ContactContents = styled.a`
  font-size: ${({ theme }) => `${theme.text.md.fontSize}`};
`;

export const IconLink = styled.a``;

export const IconWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.spacing3};
  margin-top: ${(props) => props.theme.spacing.spacing2};
`;

export const Icon = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
`;

export const Logo = styled.p`
  font-family: 'Themunday', sans-serif;
  font-size: ${({ theme }) => `${theme.heading.xxl.fontSize}`};
  line-height: ${({ theme }) => `${theme.heading.xxl.lineHeight}`};
  margin-top: ${(props) => props.theme.spacing.spacing6};
`;

export const Address = styled.p``;

export const Copyright = styled.p``;

export const HoursTitle = styled.p`
  font-size: ${({ theme }) => `${theme.heading.sm.fontSize}`};
  margin-bottom: ${(props) => props.theme.spacing.spacing6};
`;

export const DayWrapper = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.spacing2};
`;

export const Day = styled.p`
  font-weight: 700;
`;

export const Time = styled.p``;
