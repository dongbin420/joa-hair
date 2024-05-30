import * as S from './ContactPage.styles';
import PageBanner from '@/components/PageBanner/PageBanner';
import ContactBox from '@/components/ContactBox/ContactBox';
import bannerImg4 from '@/assets/imgs/webp/bannerImg4.webp';
import { CONTACT_CONTENT } from '@/constants/bannerContent';

function ContactPage() {
  return (
    <>
      <PageBanner img={bannerImg4} content={CONTACT_CONTENT} />
      <S.ContactPageContainer>
        <ContactBox />
      </S.ContactPageContainer>
    </>
  );
}

export default ContactPage;
