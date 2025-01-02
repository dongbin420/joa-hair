import * as S from './Footer.styles';
import { useEffect, useRef } from 'react';
import instagram from '@/assets/imgs/png/instagram.png';
import facebook from '@/assets/imgs/png/facebook.png';
import { INSTAGRAM_URL, FACEBOOK_URL, GOOGLE_MAP_URL } from '@/constants/url';

function Footer() {
  const marqueeWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const marqueeWrapper = marqueeWrapperRef.current;

    if (marqueeWrapper) {
      const marqueeTexts = marqueeWrapper.children;
      let totalWidth = 0;

      for (let i = 0; i < marqueeTexts.length; i++) {
        const text = marqueeTexts[i] as HTMLElement;
        const style = window.getComputedStyle(text);
        const marginRight = parseFloat(style.marginRight);
        totalWidth += text.offsetWidth + marginRight;
      }

      marqueeWrapper.style.width = `${totalWidth}px`;
    }
  }, []);

  return (
    <>
      <S.MarqueeContainer>
        <S.MarqueeWrapper ref={marqueeWrapperRef}>
          {[...Array(4)].map((_, idx) => (
            <S.MarqueeText key={idx}>
              Welcome to <S.MundayText>JOA HAIR.</S.MundayText>
            </S.MarqueeText>
          ))}
        </S.MarqueeWrapper>
      </S.MarqueeContainer>
      <S.FooterContainer>
        <S.FooterSection order={'1'}>
          <S.ContactTitle>CONTACT</S.ContactTitle>
          <S.ContactContents href="tel:0494112551">0494 112 551</S.ContactContents>
          <S.ContactContents href="mailto:Joahair@hotmail.com">
            Joahair@hotmail.com
          </S.ContactContents>
          <S.IconWrapper>
            <S.IconLink href={INSTAGRAM_URL} target="_blank">
              <S.Icon src={instagram} alt="instagram icon" />
            </S.IconLink>
            <S.IconLink href={FACEBOOK_URL} target="_blank">
              <S.Icon src={facebook} alt="facebook icon" />
            </S.IconLink>
          </S.IconWrapper>
        </S.FooterSection>
        <S.FooterSection order={'3'}>
          <S.Logo>JOA HAIR</S.Logo>
          <S.Address>
            <S.AddressLink href={GOOGLE_MAP_URL} target="_blank">
              Shop 15/803 Stanley St, Woolloongabba QLD 4102
            </S.AddressLink>
          </S.Address>
          <S.Copyright>© 2024 Joa hair. All rights reserved.</S.Copyright>
        </S.FooterSection>
        <S.FooterSection order={'2'}>
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
            <S.Time>9am - 5pm</S.Time>
          </S.DayWrapper>
        </S.FooterSection>
      </S.FooterContainer>
    </>
  );
}

export default Footer;
