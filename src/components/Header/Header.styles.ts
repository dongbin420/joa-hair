import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing.spacing5} 0;
  background-color: ${(props) => props.theme.color.orange50};
`;

export const HeaderFirst = styled.nav`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.spacing9};
`;

export const Logo = styled.div`
  font-family: 'Themunday', sans-serif;
  font-size: ${(props) => props.theme.heading.md.fontSize};
  letter-spacing: normal;
  color: ${(props) => props.theme.color.black};
  margin-top: ${(props) => props.theme.spacing.spacing1};
  font-weight: 600;
  cursor: pointer;
`;

export const NavLink = styled.a`
  color: ${(props) => props.theme.color.orange400};
  font-size: ${(props) => props.theme.text.lg.fontSize};
  &:hover {
    color: ${(props) => props.theme.color.black};
  }
`;

export const HeaderSecond = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.spacing6};
`;

export const IconWrapper = styled.img`
  cursor: pointer;
  width: 50px;
  height: 50px;
`;
