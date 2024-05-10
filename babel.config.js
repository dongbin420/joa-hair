module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1',
          node: 'current',
        }, // 타겟 버전 기준으로 이 이상 버전에 대해서 모두 지원
        useBuiltIns: 'usage', // 구형 브라우저에 polyfill 사용
        corejs: '3.37.0', // @babel/preset-env가 직접 폴리필을 참조하는 곳
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // 어떤 런타임을 사용할지 결정. automatic은 jsx 등을 트랜스 파일하는 헬퍼함수를 자동으로 가져옴. import React from 'react' 를 필요없게 해줌
      },
    ],
    ['@babel/preset-typescript'],
  ],
};
