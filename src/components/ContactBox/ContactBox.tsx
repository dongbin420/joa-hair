import * as S from './ContactBox.styles';
import ImgWrapper from '@/components/ImgWrapper/ImgWrapper';
import locationIcon from '@/assets/imgs/svg/location.svg';
import clockIcon from '@/assets/imgs/svg/clock.svg';
import phoneIcon from '@/assets/imgs/svg/phone.svg';
import instagram from '@/assets/imgs/png/instagram.png';
import facebook from '@/assets/imgs/png/facebook.png';
import { INSTAGRAM_URL, FACEBOOK_URL, GOOGLE_MAP_URL } from '@/constants/url';

function ContactBox() {
  return (
    <S.ContactBoxContainerContainer>
      <S.ContactBoxContainer>
        <S.InformationWrapper>
          <ImgWrapper img={phoneIcon} width={'50px'} height={'50px'} description={'phone icon'} />
          <S.InformationTitle>Contact</S.InformationTitle>
          <S.InformationText link={true}>
            <S.InformationLink href="tel:+610494112551">0494 112 551</S.InformationLink>
          </S.InformationText>
          <S.InformationText link={true}>
            <S.InformationLink href="mailto:Joahair@hotmail.com">
              Joahair@hotmail.com
            </S.InformationLink>
          </S.InformationText>
          <S.IconWrapper>
            <S.IconLink href={INSTAGRAM_URL} target="_blank">
              <S.Icon src={instagram} alt="instagram icon" />
            </S.IconLink>
            <S.IconLink href={FACEBOOK_URL} target="_blank">
              <S.Icon src={facebook} alt="facebook icon" />
            </S.IconLink>
          </S.IconWrapper>
        </S.InformationWrapper>
        <S.InformationWrapper>
          <ImgWrapper img={clockIcon} width={'50px'} height={'50px'} description={'clock icon'} />
          <S.InformationTitle>Hours</S.InformationTitle>
          <S.InformationText title={true}>Monday - Friday</S.InformationText>
          <S.InformationText>9am - 5:30pm</S.InformationText>
          <S.InformationText title={true}>Saturday</S.InformationText>
          <S.InformationText>9am - 5pm</S.InformationText>
          <S.InformationText title={true}>Sunday</S.InformationText>
          <S.InformationText lastText={true}>Closed</S.InformationText>
        </S.InformationWrapper>
        <S.InformationWrapper>
          <ImgWrapper
            img={locationIcon}
            width={'50px'}
            height={'50px'}
            description={'location icon'}
          />
          <S.InformationTitle>Location</S.InformationTitle>
          <S.InformationLink href={GOOGLE_MAP_URL} target="_blank">
            <S.InformationText link={true}>Shop 15/803 Stanley St,</S.InformationText>
            <S.InformationText link={true} lastText={true}>
              Woolloongabba QLD 4102
            </S.InformationText>
          </S.InformationLink>
        </S.InformationWrapper>
      </S.ContactBoxContainer>
    </S.ContactBoxContainerContainer>
  );
}

export default ContactBox;
