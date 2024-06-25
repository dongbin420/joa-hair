import * as S from './ContactPage.styles';
import PageBanner from '@/components/PageBanner/PageBanner';
import Accordion from '@/components/Accordion/Accordion';
import ContactBox from '@/components/ContactBox/ContactBox';
import bannerImg4 from '@/assets/imgs/webp/bannerImg4.webp';
import parkingImg from '@/assets/imgs/webp/parking.webp';
import { CONTACT_CONTENT } from '@/constants/bannerContent';
import { GOOGLE_MAP_EMBED_URL } from '@/constants/url';
import { CONTACT_QUESTIONS } from '@/constants/text';

function ContactPage() {
  return (
    <>
      <PageBanner img={bannerImg4} content={CONTACT_CONTENT} />
      <ContactBox />
      <S.ContactPageContainer>
        <S.GoogleMapContainer>
          <S.GoogleMap
            title="google map for joa hair"
            src={GOOGLE_MAP_EMBED_URL}
            allow="fullscreen"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </S.GoogleMapContainer>
        <S.AccordionWrapper>
          <S.AccordionTitle>Most Asked Questions</S.AccordionTitle>
          <Accordion width="800px">
            {CONTACT_QUESTIONS.map((question, questionIdx) => (
              <Accordion.Item key={questionIdx}>
                <Accordion.Header idx={questionIdx}>{question.question}</Accordion.Header>
                <Accordion.Body idx={questionIdx}>
                  {question.isParking && <S.ParkingImg src={parkingImg} />}
                  {question.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </S.AccordionWrapper>
      </S.ContactPageContainer>
    </>
  );
}

export default ContactPage;
