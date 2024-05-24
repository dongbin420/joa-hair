import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import * as S from './Overlay.styles';
import ImgWrapper from '@/components/ImgWrapper/ImgWrapper';
import Button from '@/components/Button/Button';
import closeIcon from '@/assets/imgs/svg/close.svg';
import instagram from '@/assets/imgs/png/instagram.png';
import facebook from '@/assets/imgs/png/facebook.png';
import { INSTAGRAM_URL, FACEBOOK_URL, RESERVATION_URL } from '@/constants/url';
import { ROUTES } from '@/constants/routes';

interface OverlayProps {
  toggleOverlay: () => void;
}

function Overlay({ toggleOverlay }: OverlayProps) {
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();

  const handleClose = (path?: string) => {
    if (location.pathname === path) {
      return;
    }

    setIsClosing(true);

    setTimeout(() => {
      toggleOverlay();
      setIsClosing(false);
    }, 500);
  };

  return (
    <S.OverlayContainer isClosing={isClosing}>
      <S.OverlayContentContainer>
        <S.OverlayLinkContainer>
          {ROUTES.map((route) => (
            <S.NavLinkWrapper key={route.path}>
              <NavLink onClick={() => handleClose(route.path)} to={route.path}>
                {route.label}
              </NavLink>
            </S.NavLinkWrapper>
          ))}
        </S.OverlayLinkContainer>
        <S.IconWrapper>
          <S.IconLink href={INSTAGRAM_URL} target="_blank">
            <S.Icon src={instagram} />
          </S.IconLink>
          <S.IconLink href={FACEBOOK_URL} target="_blank">
            <S.Icon src={facebook} />
          </S.IconLink>
        </S.IconWrapper>
        <S.ButtonLink href={RESERVATION_URL} target="_blank">
          <Button size={'xLarge'}>BOOK NOW</Button>
        </S.ButtonLink>
      </S.OverlayContentContainer>
      <ImgWrapper
        onClick={handleClose}
        img={closeIcon}
        width={'50px'}
        customCss={S.CloseCustomCss}
      />
    </S.OverlayContainer>
  );
}

export default Overlay;
