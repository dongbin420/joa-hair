import * as S from './ServiceSelection.styles';
import SelectionTitle from '../common/SelectionTitle/SelectionTitle';
import ServiceContent from './ServiceContent/ServiceContent';

function ServiceSelection() {
  return (
    <S.SelectionContainer>
      <SelectionTitle />
      <ServiceContent />
    </S.SelectionContainer>
  );
}

export default ServiceSelection;
