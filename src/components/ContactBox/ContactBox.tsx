import * as S from './ContactBox.styles';
import ImgWrapper from '@/components/ImgWrapper/ImgWrapper';
import locationIcon from '@/assets/imgs/svg/location.svg';
import clockIcon from '@/assets/imgs/svg/clock.svg';
import phoneIcon from '@/assets/imgs/svg/phone.svg';
import { GOOGLE_MAP_URL } from '@/constants/url';

function ContactBox() {
  return (
    <S.ContactBoxContainer>
      <S.InformationWrapper>
        <ImgWrapper img={phoneIcon} width={'50px'} height={'50px'} />
        <S.InformationTitle>Contact</S.InformationTitle>
        <S.InformationText>
          <S.InformationLink href="tel:+610494112551">0494 112 551</S.InformationLink>
        </S.InformationText>
        <S.InformationText lastText={true}>
          <S.InformationLink href="mailto:Joahair@hotmail.com">
            Joahair@hotmail.com
          </S.InformationLink>
        </S.InformationText>
      </S.InformationWrapper>
      <S.InformationWrapper>
        <ImgWrapper img={clockIcon} width={'50px'} height={'50px'} />
        <S.InformationTitle>Hours</S.InformationTitle>
        <S.InformationText title={true}>Monday - Friday</S.InformationText>
        <S.InformationText>9am - 5:30pm</S.InformationText>
        <S.InformationText title={true}>Saturday</S.InformationText>
        <S.InformationText>9am - 5pm</S.InformationText>
        <S.InformationText title={true}>Sunday</S.InformationText>
        <S.InformationText lastText={true}>Closed</S.InformationText>
      </S.InformationWrapper>
      <S.InformationWrapper>
        <ImgWrapper img={locationIcon} width={'50px'} height={'50px'} />
        <S.InformationTitle>Location</S.InformationTitle>
        <S.InformationLink href={GOOGLE_MAP_URL}>
          <S.InformationText>Shop 15/803 Stanley St,</S.InformationText>
          <S.InformationText lastText={true}>Woolloongabba QLD 4102</S.InformationText>
        </S.InformationLink>
      </S.InformationWrapper>
    </S.ContactBoxContainer>
  );
}

export default ContactBox;
