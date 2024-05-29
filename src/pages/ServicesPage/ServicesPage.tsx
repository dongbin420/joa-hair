import * as S from './ServicesPage.styles';
import PageBanner from '@/components/PageBanner/PageBanner';
import ImgWrapper from '@/components/ImgWrapper/ImgWrapper';
import Button from '@/components/Button/Button';
import bannerImg2 from '@/assets/imgs/webp/bannerImg2.webp';
import serviceImg1 from '@/assets/imgs/png/serviceImg1.png';
import serviceImg2 from '@/assets/imgs/png/serviceImg2.png';
import serviceImg3 from '@/assets/imgs/png/serviceImg3.png';
import { SERVICES_CONTENT } from '@/constants/bannerContent';
import { RESERVATION_URL } from '@/constants/url';
import { SERVICES_NOTE_TEXT } from '@/constants/text';

function ServicesPage() {
  return (
    <>
      <PageBanner img={bannerImg2} content={SERVICES_CONTENT} />
      <S.ServicesPageContainer>
        <S.ServicesPicWrapper>
          {[serviceImg1, serviceImg2, serviceImg3].map((img, idx) => (
            <ImgWrapper key={idx} img={img} customCss={S.ImgWrapperCustomCss} />
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
