const theme = {
  breakpoints: {
    xxl: '1540px',
    xl: '1200px',
    lg: '992px',
    md: '768px',
    sm: '576px',
    xs: '400px',
  },
  color: {
    black: '#000000',
    gray900: '#151515',
    gray800: '#282828',
    gray700: '#5e5e5e',
    gray600: '#727272',
    gray500: '#a6a6a6',
    gray400: '#bbbbbb',
    gray300: '#dddddd',
    gray200: '#e8e8e8',
    gray100: '#F6F6F6',
    white: '#ffffff',
    orange900: '#7E2410',
    orange800: '#9C2A10',
    orange700: '#C4320A',
    orange600: '#FE5000',
    orange500: '#FB6514',
    orange400: '#FD853A',
    orange300: '#FEB273',
    orange200: '#FDDCAB',
    orange100: '#FFEAD5',
    orange50: '#FFF6ED',
    orange25: '#FFFAF5',
  },
  spacing: {
    spacing1: '4px',
    spacing2: '8px',
    spacing3: '12px',
    spacing4: '16px',
    spacing5: '20px',
    spacing6: '24px',
    spacing7: '32px',
    spacing8: '40px',
    spacing9: '48px',
    spacing10: '64px',
    spacing11: '80px',
    spacing12: '96px',
    spacing13: '128px',
    spacing14: '160px',
    spacing15: '192px',
    spacing16: '224px',
    spacing17: '256px',
  },
  heading: {
    xxl: {
      fontSize: '72px',
      lineHeight: '90px',
    },
    xl: {
      fontSize: '60px',
      lineHeight: '72px',
    },
    lg: {
      fontSize: '48px',
      lineHeight: '60px',
    },
    md: {
      fontSize: '36px',
      lineHeight: '44px',
    },
    sm: {
      fontSize: '30px',
      lineHeight: '38px',
    },
  },
  text: {
    xl: {
      fontSize: '24px',
      lineHeight: '32px',
    },
    lg: {
      fontSize: '20px',
      lineHeight: '30px',
    },
    md: {
      fontSize: '18px',
      lineHeight: '28px',
    },
    sm: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    xs: {
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
} as const;

export default theme;
