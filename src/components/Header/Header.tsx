import * as Styles from './Header.styles';
import Button from '@/components/Button/Button';
import instagram from '@/assets/imgs/instagram.png';
import facebook from '@/assets/imgs/facebook.png';

function Header() {
  return (
    <Styles.HeaderContainer>
      <Styles.HeaderFirst>
        <Styles.Logo>JOA HAIR</Styles.Logo>
        <Styles.NavLink>ABOUT</Styles.NavLink>
        <Styles.NavLink>MENU</Styles.NavLink>
        <Styles.NavLink>PHOTO</Styles.NavLink>
        <Styles.NavLink>CONTACT</Styles.NavLink>
      </Styles.HeaderFirst>
      <Styles.HeaderSecond>
        <Styles.IconWrapper src={instagram} alt="Instagram" />
        <Styles.IconWrapper src={facebook} alt="Facebook" />
        <Button>BOOK NOW</Button>
      </Styles.HeaderSecond>
    </Styles.HeaderContainer>
  );
}

export default Header;
