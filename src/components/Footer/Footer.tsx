import * as S from './Footer.styles';
import instagram from '@/assets/imgs/png/instagram.png';
import facebook from '@/assets/imgs/png/facebook.png';
import { INSTAGRAM_URL, FACEBOOK_URL } from '@/constants/url';

function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterSection>
        <S.ContactTitle>CONTACT</S.ContactTitle>
        <S.ContactContents href="tel:+610494112551">0494 112 551</S.ContactContents>
        <S.ContactContents href="mailto:Joahair@hotmail.com">Joahair@hotmail.com</S.ContactContents>
        <S.IconWrapper>
          <S.IconLink href={INSTAGRAM_URL} target="_blank">
            <S.Icon src={instagram} />
          </S.IconLink>
          <S.IconLink href={FACEBOOK_URL} target="_blank">
            <S.Icon src={facebook} />
          </S.IconLink>
        </S.IconWrapper>
      </S.FooterSection>
      <S.FooterSection move={true}>
        <S.Logo>JOA HAIR</S.Logo>
        <S.Address>Shop 15/803 Stanley St, Woolloongabba QLD 4102</S.Address>
        <S.Copyright>© 2024 Joa hair. All rights reserved.</S.Copyright>
      </S.FooterSection>
      <S.FooterSection move={true}>
        <S.HoursTitle>HOURS</S.HoursTitle>
        <S.DayWrapper>
          <S.Day>Monday - Friday</S.Day>
          <S.Time>9am - 5:30pm</S.Time>
        </S.DayWrapper>
        <S.DayWrapper>
          <S.Day>Saturday</S.Day>
          <S.Time>9am - 5pm</S.Time>
        </S.DayWrapper>
        <S.DayWrapper>
          <S.Day>Sunday</S.Day>
          <S.Time>Closed</S.Time>
        </S.DayWrapper>
      </S.FooterSection>
    </S.FooterContainer>
  );
}

export default Footer;
