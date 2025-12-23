import SummaryLayout from './SummaryLayout/SummaryLayout';
import UserInfo from './UserInfo/UserInfo';
import * as S from './BookingSummary.styles';

function BookingSummary() {
  return (
    <S.BookingSummaryContainer>
      <SummaryLayout />
      <UserInfo />
    </S.BookingSummaryContainer>
  );
}

export default BookingSummary;
