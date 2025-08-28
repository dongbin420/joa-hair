import { Link } from 'react-router-dom';
import { useOverlayToggle } from '@/hooks/useOverlayToggle';
import * as S from './Header.styles';
import Button from '@/components/Button/Button';
import ImgWrapper from '@/components/ImgWrapper/ImgWrapper';
import Overlay from '@/components/Overlay/Overlay';
import instagram from '@/assets/imgs/png/instagram.png';
import facebook from '@/assets/imgs/png/facebook.png';
import hamburgerIcon from '@/assets/imgs/svg/hamburger.svg';
import { INSTAGRAM_URL, FACEBOOK_URL } from '@/constants/url';
import { ROUTES } from '@/constants/routes';
import { RESERVATION_ROUTE } from '@/constants/routes';

function Header({ isSticky }: { isSticky: boolean }) {
  const { isOverlayOpen, toggleOverlay } = useOverlayToggle();

  return (
    <S.HeaderBigContainer id="headerBigContainer" isSticky={isSticky}>
      <S.HeaderContainer isSticky={isSticky}>
        <S.HeaderFirst>
          <Link to="/">
            <S.LogoWrapper isSticky={isSticky}>
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
            <S.Icon src={instagram} alt="instagram icon" isSticky={isSticky}></S.Icon>
          </S.IconLink>
          <S.IconLink href={FACEBOOK_URL} target="_blank">
            <S.Icon src={facebook} alt="facebook icon" isSticky={isSticky} />
          </S.IconLink>
          <S.ButtonLink>
            <Link to={RESERVATION_ROUTE}>
              <Button size={'large'} customCss={S.ButtonCustomCss} isSticky={isSticky}>
                BOOK NOW
              </Button>
            </Link>
          </S.ButtonLink>
        </S.HeaderSecond>
        <ImgWrapper
          onClick={toggleOverlay}
          img={hamburgerIcon}
          width={'45px'}
          customCss={S.HamburgerCustomCss}
          isSticky={isSticky}
          description={'hamburger icon'}
        />
      </S.HeaderContainer>
      {isOverlayOpen && <Overlay toggleOverlay={toggleOverlay} />}
    </S.HeaderBigContainer>
  );
}

export default Header;
