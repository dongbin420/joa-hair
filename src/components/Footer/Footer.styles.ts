import { styled } from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  padding: ${({ theme }) =>
    `${theme.spacing.spacing8} ${theme.spacing.spacing10} ${theme.spacing.spacing10}`};
  background-color: ${(props) => props.theme.color.white};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: space-between;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.spacing9};
    padding-top: ${({ theme }) => theme.spacing.spacing9};
  }
`;

export const FooterSection = styled.div<{ order: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.spacing7};
  margin-right: ${({ theme }) => `${theme.spacing.spacing10}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-right: 0;
    order: ${({ order }) => order};
    gap: ${(props) => props.theme.spacing.spacing2};
  }
`;

export const ContactTitle = styled.p`
  font-size: ${({ theme }) => `${theme.heading.sm.fontSize}`};
  margin-bottom: ${({ theme }) => `${theme.spacing.spacing4}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => `${theme.text.xl.fontSize}`};
  }
`;

export const ContactContents = styled.a`
  font-size: ${({ theme }) => `${theme.text.md.fontSize}`};

  &:hover {
    color: ${({ theme }) => `${theme.color.orange600}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => `${theme.text.sm.fontSize}`};
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
  width: 25px;
  height: 25px;
`;

export const Logo = styled.p`
  font-family: 'Themunday', sans-serif;
  font-size: ${({ theme }) => `${theme.heading.xxl.fontSize}`};
  line-height: ${({ theme }) => `${theme.heading.xxl.lineHeight}`};
  margin-top: ${(props) => props.theme.spacing.spacing6};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => `${theme.heading.xl.fontSize}`};
    line-height: ${({ theme }) => `${theme.heading.md.lineHeight}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => `${theme.spacing.spacing4}`};
  }
`;

export const Address = styled.p``;

export const Copyright = styled.p``;

export const HoursTitle = styled.p`
  font-size: ${({ theme }) => `${theme.heading.sm.fontSize}`};
  margin-bottom: ${(props) => props.theme.spacing.spacing4};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => `${theme.text.xl.fontSize}`};
  }
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
