import { Link } from 'react-router-dom';
import { useOverlayToggle } from '@/hooks/useOverlayToggle';
import * as S from './Header.styles';
import Button from '@/components/Button/Button';
import ImgWrapper from '@/components/ImgWrapper/ImgWrapper';
import Overlay from '@/components/Overlay/Overlay';
import instagram from '@/assets/imgs/png/instagram.png';
import facebook from '@/assets/imgs/png/facebook.png';
import hamburgerIcon from '@/assets/imgs/svg/hamburger.svg';
import { INSTAGRAM_URL, FACEBOOK_URL, RESERVATION_URL } from '@/constants/url';
import { ROUTES } from '@/constants/routes';

function Header() {
  const { isOverlayOpen, toggleOverlay } = useOverlayToggle();
  return (
    <>
      <S.HeaderContainer>
        <S.HeaderFirst>
          <Link to="/">
            <S.LogoWrapper>
              <S.LogoTop>JOA</S.LogoTop>
              <S.LogoBottom>HAIR</S.LogoBottom>
            </S.LogoWrapper>
          </Link>
          {ROUTES.slice(1).map((route) => (
            <S.NavElement key={route.path}>
              <Link to={route.path}>{route.label}</Link>
            </S.NavElement>
          ))}
        </S.HeaderFirst>
        <S.HeaderSecond>
          <S.IconLink href={INSTAGRAM_URL} target="_blank">
            <S.Icon src={instagram} alt="Instagram"></S.Icon>
          </S.IconLink>
          <S.IconLink href={FACEBOOK_URL} target="_blank">
            <S.Icon src={facebook} alt="Facebook" />
          </S.IconLink>
          <S.ButtonLink href={RESERVATION_URL} target="_blank">
            <Button size={'large'} customCss={S.ButtonCustomCss}>
              BOOK NOW
            </Button>
          </S.ButtonLink>
        </S.HeaderSecond>
        <ImgWrapper
          onClick={toggleOverlay}
          img={hamburgerIcon}
          width={'45px'}
          customCss={S.HamburgerCustomCss}
        />
      </S.HeaderContainer>
      {isOverlayOpen && <Overlay toggleOverlay={toggleOverlay} />}
    </>
  );
}

export default Header;
