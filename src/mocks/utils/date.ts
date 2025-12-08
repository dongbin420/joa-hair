export const toMs = (ymd: string) => {
  const [y, m, d] = ymd.split('-').map(Number);
  return Date.UTC(y, m - 1, d);
};

export const toYmdForHandler = (ms: number) => {
  return new Date(ms).toISOString().slice(0, 10);
};

// 같은 문자를 넣으면, 항상 같은 값, 다른 문자는 아주 높은 확률로 다른 값을 리턴하는 해시함수
// 문자를 32비트 정수 범위(약 42억개)의 숫자 하나로 변환
export const hashString = (str: string): number => {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }

  return Math.abs(hash);
};

// seed(문자열의 고유 값)를 기준으로, 연속된 랜덤 시퀀스를 만드는 함수(이 함수로 리턴하는 함수를 호출할 때 마다 각 시퀀스를 구성하는 하나의 숫자가 생성된다.)
export const pseudoRandom = (seedStr: string) => {
  let seed = hashString(seedStr);

  return () => {
    // 0-1 사이의 숫자를 만들기 위한 방식
    const x = Math.sin(seed++) * 10000;

    return x - Math.floor(x); // 0 ~ 1 사이의 숫자
  };
};
