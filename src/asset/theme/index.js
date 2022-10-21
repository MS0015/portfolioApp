import { extendTheme } from 'native-base';
import { ms } from 'react-native-size-matters';

// eslint-disable-next-line import/prefer-default-export
export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  colors: {
    primary: {
      500: '#51C273',
      700: '#31B057',
    },
  },
  fontConfig: {
    Mulish: {
      100: {
        normal: 'Mulish-ExtraLight',
      },
      200: {
        normal: 'Mulish-Regular',
      },
      300: {
        normal: 'Mulish-SemiBold',
      },
      400: {
        normal: 'Mulish-Bold',
      },
      500: {
        normal: 'Mulish-ExtraBold',
      },
      600: {
        normal: 'Mulish-Black',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    body: 'Mulish',
    mono: 'Mulish',
    Mulish: 'Mulish',
  },

  // Comp default style config
  components: {
    // Button
    Button: {
      baseStyle: {},
      defaultProps: {
        _text: {
          fontFamily: 'Mulish',
        },
      },
    },
    // Badge
    Badge: {
      baseStyle: {},
      defaultProps: {
        _text: {
          fontFamily: 'Mulish',
        },
      },
    },
    // Text
    Text: {
      baseStyle: {},
      defaultProps: {},
      variants: {
        mLight: {
          fontFamily: 'Mulish',
          color: '#25282B',
          fontSize: ms(12),
          fontWeight: 100,
        },
        desc: {
          fontFamily: 'Mulish',
          color: '#25282B',
          fontSize: ms(12),
          fontWeight: 200,
        },
        titleSm: {
          fontFamily: 'Mulish',
          color: '#25282B',
          fontSize: ms(14),
          fontWeight: 300,
        },
        title: {
          fontFamily: 'Mulish',
          color: '#25282B',
          fontSize: ms(14),
          fontWeight: 400,
        },
        mainTitle: {
          fontFamily: 'Mulish',
          fontWeight: 500,
          color: '#25282B',
          fontSize: ms(15),
        },
        bigTitle: {
          fontFamily: 'Mulish',
          fontWeight: 600,
          color: '#25282B',
          fontSize: ms(15),
        },
        light: {
          fontFamily: 'Mulish',
          color: '#25282B',
          fontSize: ms(12),
          fontWeight: 100,
        },
        regular: {
          fontFamily: 'Mulish',
          color: '#25282B',
          fontSize: ms(13),
          fontWeight: 200,
        },
        semiBold: {
          fontFamily: 'Mulish',
          color: '#25282B',
          fontSize: ms(14),
          fontWeight: 300,
        },
        bold: {
          fontFamily: 'Mulish',
          color: '#25282B',
          fontSize: ms(15),
          fontWeight: 400,
        },
        xtraBold: {
          fontFamily: 'Mulish',
          fontWeight: 500,
          color: '#25282B',
          fontSize: ms(16),
        },
        black: {
          fontFamily: 'Mulish',
          fontWeight: 600,
          color: '#25282B',
          fontSize: ms(17),
        },
      },
    },
  },
});
