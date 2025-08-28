import * as S from './ServiceAccordion.styles';
import Accordion from '@/components/Accordion/Accordion';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import { BOOKING_SERVICES } from '@/constants/bookingData';
import { useFormContext } from 'react-hook-form';
import { validateServiceIds } from '@/utils/validators';

function ServiceAccordion() {
  const { watch, register, formState } = useFormContext();
  const services = watch('serviceIds');

  return (
    <>
      <Accordion>
        {BOOKING_SERVICES.map((question, idx) => {
          const selectedCnt = question.answer.options.filter((option) =>
            services.includes(option.menu),
          ).length;

          return (
            <Accordion.Item key={idx}>
              <Accordion.Header idx={idx}>
                <S.SelectedTextWrapper>
                  <div>{question.question}</div>
                  <p>{selectedCnt !== 0 ? `${selectedCnt} selected` : ''}</p>
                </S.SelectedTextWrapper>
              </Accordion.Header>
              <Accordion.Body idx={idx}>
                <ServiceDetails details={question.answer} />
              </Accordion.Body>
            </Accordion.Item>
          );
        })}

        <input
          type="hidden"
          {...register('serviceIds', {
            validate: validateServiceIds,
          })}
        />
      </Accordion>
      {typeof formState.errors.serviceIds?.message === 'string' && (
        <S.SelectNote>{formState.errors.serviceIds?.message}</S.SelectNote>
      )}

      {console.log(formState.isValid)}
    </>
  );
}

export default ServiceAccordion;
