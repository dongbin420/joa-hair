import { styled } from 'styled-components';

export const ContactPageContainer = styled.div`
  max-width: 1440px;
  padding: 0 ${(props) => props.theme.spacing.spacing8};
  padding-bottom: ${(props) => props.theme.spacing.spacing10};
  margin: 0 auto;
`;

export const GoogleMapContainer = styled.div`
  padding: 0 ${(props) => props.theme.spacing.spacing12};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 -${(props) => props.theme.spacing.spacing6};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0;
  }
`;

export const GoogleMap = styled.iframe`
  width: 100%;
  height: 600px;
  border: 15px solid ${(props) => props.theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border: 7px solid ${(props) => props.theme.color.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 350px;
  }
`;
