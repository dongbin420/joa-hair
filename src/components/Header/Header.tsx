import { useOverlayToggle } from '@/hooks/useOverlayToggle';
import * as S from './Header.styles';
import Button from '@/components/Button/Button';
import ImgWrapper from '@/components/ImgWrapper/ImgWrapper';
import Overlay from '@/components/Overlay/Overlay';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import Icon from './Icon/Icon';
import instagram from '@/assets/imgs/png/instagram.png';
import facebook from '@/assets/imgs/png/facebook.png';
import hamburgerIcon from '@/assets/imgs/svg/hamburger.svg';
import { INSTAGRAM_URL, FACEBOOK_URL, RESERVATION_URL } from '@/constants/url';
import { ROUTES, INDEX_FOR_MENU } from '@/constants/routes';
import { getFilteredRoutes } from '@/utils/navigationUtils';

function Header({ isSticky }: { isSticky: boolean }) {
  const { isOverlayOpen, toggleOverlay } = useOverlayToggle();

  return (
    <S.HeaderBigContainer id="headerBigContainer" isSticky={isSticky}>
      <S.HeaderContainer isSticky={isSticky}>
        <S.HeaderFirst>
          <Logo isSticky={isSticky} />
          <Navigation routes={getFilteredRoutes(ROUTES, INDEX_FOR_MENU)} />
        </S.HeaderFirst>
        <S.HeaderSecond>
          <Icon link={INSTAGRAM_URL} img={instagram} isSticky={isSticky} />
          <Icon link={FACEBOOK_URL} img={facebook} isSticky={isSticky} />
          <S.ButtonLink href={RESERVATION_URL} target="_blank">
            <Button size={'large'} customCss={S.ButtonCustomCss} isSticky={isSticky}>
              BOOK NOW
            </Button>
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
