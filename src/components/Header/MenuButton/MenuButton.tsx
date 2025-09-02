import * as S from './MenuButton.styles';
import { Route } from '@/types/NavigationType';
import { Link } from 'react-router-dom';

interface MenuButtonProps {
  route: Route;
}

function MenuButton({ route }: MenuButtonProps) {
  return (
    <S.NavElement>
      <Link to={route.path}>{route.label}</Link>
    </S.NavElement>
  );
}

export default MenuButton;
