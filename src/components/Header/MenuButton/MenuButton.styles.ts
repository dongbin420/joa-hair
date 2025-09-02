import styled from 'styled-components';

export const NavElement = styled.div`
  color: ${({ theme }) => `${theme.color.orange600}`};
  font-size: ${(props) => props.theme.text.lg.fontSize};

  &:hover {
    color: ${(props) => props.theme.color.black};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;
