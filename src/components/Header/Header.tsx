import * as S from './Header.styles';
import Button from '@/components/Button/Button';
import instagram from '@/assets/imgs/png/instagram.png';
import facebook from '@/assets/imgs/png/facebook.png';
import { INSTAGRAM_URL, FACEBOOK_URL, RESERVATION_URL } from '@/constants/url';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderFirst>
        <Link to="/">
          <S.LogoWrapper>
            <S.LogoTop>JOA</S.LogoTop>
            <S.LogoBottom>HAIR</S.LogoBottom>
          </S.LogoWrapper>
        </Link>
        <Link to="about">
          <S.NavElement>ABOUT</S.NavElement>
        </Link>
        <Link to="services">
          <S.NavElement>SERVICES</S.NavElement>
        </Link>
        <Link to="gallery">
          <S.NavElement>GALLERY</S.NavElement>
        </Link>
        <Link to="contact">
          <S.NavElement>CONTACT</S.NavElement>
        </Link>
      </S.HeaderFirst>
      <S.HeaderSecond>
        <S.IconLink href={INSTAGRAM_URL} target="_blank">
          <S.Icon src={instagram} alt="Instagram" />
        </S.IconLink>
        <S.IconLink href={FACEBOOK_URL} target="_blank">
          <S.Icon src={facebook} alt="Facebook" />
        </S.IconLink>
        <S.ButtonLink href={RESERVATION_URL} target="_blank">
          <Button>BOOK NOW</Button>
        </S.ButtonLink>
      </S.HeaderSecond>
    </S.HeaderContainer>
  );
}

export default Header;
