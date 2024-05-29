import { styled } from 'styled-components';

export const AboutPageContainer = styled.div`
  max-width: 1440px;
  padding: 0 ${(props) => props.theme.spacing.spacing8};
  padding-bottom: ${(props) => props.theme.spacing.spacing10};
  margin: 0 auto;

  // 작업 완료 후 삭제
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.heading.xxl.fontSize};
`;
