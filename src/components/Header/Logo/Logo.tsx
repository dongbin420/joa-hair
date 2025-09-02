import { Link } from 'react-router-dom';
import * as S from './Logo.styles';

interface LogoProps {
  isSticky: boolean;
}

function Logo({ isSticky }: LogoProps) {
  return (
    <Link to="/">
      <S.LogoWrapper isSticky={isSticky}>
        <S.LogoTop>JOA</S.LogoTop>
        <S.LogoBottom>HAIR</S.LogoBottom>
      </S.LogoWrapper>
    </Link>
  );
}

export default Logo;
