import * as S from './ServicesPage.styles';
import PageBanner from '@/components/PageBanner/PageBanner';
import ImgWrapper from '@/components/ImgWrapper/ImgWrapper';
import Button from '@/components/Button/Button';
import PromiseBox from '@/components/PromiseBox/PromiseBox';
import bannerImg2 from '@/assets/imgs/webp/bannerImg2.webp';
import serviceImg from '@/assets/imgs/png/serviceImg.png';
import { SERVICES_CONTENT } from '@/constants/bannerContent';
import { RESERVATION_URL } from '@/constants/url';
import { SERVICES_NOTE_TEXT } from '@/constants/text';

function ServicesPage() {
  return (
    <>
      <PageBanner img={bannerImg2} content={SERVICES_CONTENT} />
      <PromiseBox />
      <S.ServicesPageContainer>
        <S.ServicesTitle>Our Services</S.ServicesTitle>
        <S.ServicesPicWrapper>
          {[serviceImg].map((img, idx) => (
            <ImgWrapper
              key={idx}
              img={img}
              customCss={S.ImgWrapperCustomCss}
              description={'service menu image'}
            />
          ))}
        </S.ServicesPicWrapper>
        <S.ButtonLink href={RESERVATION_URL} target="_blank">
          <Button size={'xxLarge'} customCss={S.ButtonCustomCss}>
            BOOK NOW
          </Button>
        </S.ButtonLink>
        <S.NoteWrapper>
          <S.NoteTitle>Note</S.NoteTitle>
          <S.NoteTextWrapper>
            {SERVICES_NOTE_TEXT.map((text, idx) => (
              <S.NoteText key={idx}>{text}</S.NoteText>
            ))}
          </S.NoteTextWrapper>
        </S.NoteWrapper>
      </S.ServicesPageContainer>
    </>
  );
}

export default ServicesPage;
