import MenuButton from '../MenuButton/MenuButton';
import { Route } from '@/types/NavigationType';

interface NavigationProps {
  routes: Route[];
}

function Navigation({ routes }: NavigationProps) {
  return (
    <>
      {routes.map((route) => (
        <MenuButton key={route.path} route={route} />
      ))}
    </>
  );
}

export default Navigation;
