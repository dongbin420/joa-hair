import * as S from './Header.styles';
import Button from '@/components/Button/Button';
import instagram from '@/assets/imgs/instagram.png';
import facebook from '@/assets/imgs/facebook.png';

function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderFirst>
        <S.Logo>JOA HAIR</S.Logo>
        <S.NavLink>ABOUT</S.NavLink>
        <S.NavLink>MENU</S.NavLink>
        <S.NavLink>PHOTO</S.NavLink>
        <S.NavLink>CONTACT</S.NavLink>
      </S.HeaderFirst>
      <S.HeaderSecond>
        <S.IconWrapper src={instagram} alt="Instagram" />
        <S.IconWrapper src={facebook} alt="Facebook" />
        <Button>BOOK NOW</Button>
      </S.HeaderSecond>
    </S.HeaderContainer>
  );
}

export default Header;
