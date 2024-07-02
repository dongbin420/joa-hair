import { styled, keyframes } from 'styled-components';

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(var(--move-final)); }
`;

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

export const Address = styled.p`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => `${theme.color.orange600}`};
  }
`;

export const AddressLink = styled.a``;

export const Copyright = styled.p``;

export const HoursTitle = styled.p`
  font-size: ${({ theme }) => `${theme.heading.sm.fontSize}`};
  margin-bottom: ${(props) => props.theme.spacing.spacing4};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => `${theme.text.xl.fontSize}`};
  }
`;

export const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.spacing2};
`;

export const Day = styled.p`
  font-weight: 700;
`;

export const Time = styled.p``;

export const MarqueeContainer = styled.div`
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  border-top: 2px solid ${({ theme }) => `${theme.color.orange600}`};
  border-bottom: 2px solid ${({ theme }) => `${theme.color.orange600}`};

  --move-final: calc(-50% - 50px);
`;

export const MarqueeWrapper = styled.div`
  display: flex;
  gap: 100px;
  animation: ${marquee} 15s linear infinite;
  will-change: transform;
`;

export const MarqueeText = styled.div`
  display: inline-block;
  font-size: 100px;
  color: ${({ theme }) => `${theme.color.orange600}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => `${theme.heading.xxl.fontSize}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => `${theme.heading.lg.fontSize}`};
  }
`;

export const MundayText = styled.span`
  font-family: 'Themunday';
  line-height: 150px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    line-height: 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    line-height: ${({ theme }) => `${theme.heading.xxl.lineHeight}`};
  }
`;
