import * as S from './ServiceContent.styles';
import ServiceAccordion from '../ServiceAccordion/ServiceAccordion';
import NextButton from '../../common/NextButton/NextButton';
import { useBookingContext } from '@/hooks/useBookingContext';

function ServiceContent() {
  const { activeStep } = useBookingContext();

  return (
    <S.ServiceContentWrapper isActive={activeStep === 1}>
      <ServiceAccordion />
      <NextButton />
    </S.ServiceContentWrapper>
  );
}

export default ServiceContent;
