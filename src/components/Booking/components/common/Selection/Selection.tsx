import * as S from './Selection.styles';
import type { PropsWithChildren } from 'react';

function Selection({ children }: PropsWithChildren) {
  return <S.SelectionContainer>{children}</S.SelectionContainer>;
}

export default Selection;
