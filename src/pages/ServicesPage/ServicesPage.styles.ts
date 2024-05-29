import { styled, css } from 'styled-components';

export const ServicesPageContainer = styled.div`
  max-width: 1440px;
  padding: ${(props) => props.theme.spacing.spacing8} ${(props) => props.theme.spacing.spacing8};
  margin: ${({ theme }) => theme.spacing.spacing12} auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.spacing12};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${(props) => props.theme.spacing.spacing2};
    padding-bottom: ${(props) => props.theme.spacing.spacing10};
  }
`;

export const ServicesPicWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.spacing11};
`;

export const ImgWrapperCustomCss = {
  wrapper: css`
    flex-basis: calc(50% - ${({ theme }) => theme.spacing.spacing11} / 2);

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
      flex-basis: 80%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-basis: 100%;
    }
  `,

  img: css`
    width: 100%;
    height: 100%;
  `,
};

export const NoteWrapper = styled.div`
  max-width: 1000px;
  padding: 0 ${({ theme }) => theme.spacing.spacing6};
`;

export const NoteTitle = styled.p`
  font-size: ${({ theme }) => `${theme.text.xl.fontSize}`};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;

export const NoteTextWrapper = styled.ul`
  font-size: ${({ theme }) => `${theme.text.lg.fontSize}`};
  padding: 0 ${({ theme }) => theme.spacing.spacing5};
  font-weight: 300;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

export const NoteText = styled.li``;

export const ButtonCustomCss = css`
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 16px 45px;
  }
`;

export const ButtonLink = styled.a``;
