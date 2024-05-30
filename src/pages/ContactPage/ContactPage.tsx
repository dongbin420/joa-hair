import * as S from './ContactPage.styles';
import PageBanner from '@/components/PageBanner/PageBanner';
import ContactBox from '@/components/ContactBox/ContactBox';
import bannerImg4 from '@/assets/imgs/webp/bannerImg4.webp';
import { CONTACT_CONTENT } from '@/constants/bannerContent';
import { GOOGLE_MAP_EMBED_URL } from '@/constants/url';

function ContactPage() {
  return (
    <>
      <PageBanner img={bannerImg4} content={CONTACT_CONTENT} />
      <S.ContactPageContainer>
        <ContactBox />
        <S.GoogleMapContainer>
          <S.GoogleMap
            title="google map for joa hair"
            src={GOOGLE_MAP_EMBED_URL}
            allow="fullscreen"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </S.GoogleMapContainer>
      </S.ContactPageContainer>
    </>
  );
}

export default ContactPage;
