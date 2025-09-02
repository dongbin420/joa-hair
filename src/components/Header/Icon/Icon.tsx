import * as S from './Icon.styles';

interface IconProps {
  link: string;
  img: string;
  isSticky: boolean;
}

function Icon({ link, img, isSticky }: IconProps) {
  return (
    <S.IconLink href={link} target="_blank">
      <S.Icon src={img} isSticky={isSticky} alt="instagram icon"></S.Icon>
    </S.IconLink>
  );
}

export default Icon;
