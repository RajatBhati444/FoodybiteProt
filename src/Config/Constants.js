import { Platform } from 'react-native';

const FONT_FAMILY_REGULAR =
  Platform.OS === 'ios' ? 'Avenir Next' : 'AvenirNext';
const FONT_FAMILY_BOLD =
  Platform.OS === 'ios' ? 'SFProText-Semibold' : 'FontsFree-Net-SFProText-Semibold';

const FONT_FAMILY_SFMEDIUM =
  Platform.OS === 'ios' ? 'SFProText-Medium' : 'FontsFree-Net-SFProText-Medium';

const FONT_FAMILY_SFREGULAR =
  Platform.OS === 'ios' ? 'SFProText-Regular' : 'FontsFree-Net-SFProText-Regular';

const FONT_FAMILY_SFBOLD =
  Platform.OS === 'ios' ? 'SFProText-Bold' : 'FontsFree-Net-SFProText-Bold ';

const FONT_FAMILY_DEMIBOLD =
  Platform.OS === 'ios' ? 'SFProDisplay-Semibold' : 'FontsFree-Net-SFProDisplay-Semibold';
const FONT_FAMILY_DISPLAYLIGHT =
  Platform.OS === 'ios' ? 'SFProDisplay-Light' : 'FontsFree-Net-SFProDisplay-Light';
const FONT_FAMILY_MEDIUM =
  Platform.OS === 'ios' ? 'AvenirNext-Medium' : 'AvenirNext-Medium';
const FONT_FAMILY_SEMIBOLDITALIC =
  Platform.OS === 'ios'
    ? 'SFProDisplay-SemiboldItalic'
    : 'SF Pro Display SemiboldItalic';
const FONT_FAMILY_LIGHT =
  Platform.OS === 'ios' ? 'SFProDisplay-Regular' : 'FontsFree-Net-SFProDisplay-Regular';
const FONT_EXTRA_BOLD =
  Platform.OS === 'ios' ? 'OpenSans-Extrabold' : 'open-sans.extrabold';
const FONT_FAMILY_DISPLAYMedium =
  Platform.OS === 'ios' ? 'SFProDisplay-Medium' : 'FontsFree-Net-SFProDisplay-Medium';

const FONT_FAMILY_DISPLAYHEAVY =
  Platform.OS === 'ios' ? 'SFProDisplay-Heavy' : "FontsFree-Net-SFProDisplay-Heavy";

export function getFontFamily(type) {
  switch (type) {
    case 'bold':
      return { fontFamily: FONT_FAMILY_BOLD, fontWeight: 'bold' };
    case 'medium':
      return { fontFamily: FONT_FAMILY_MEDIUM, fontWeight: 'normal' };
    case 'lighter':
      return { fontFamily: FONT_FAMILY_DISPLAYLIGHT, fontWeight: 'normal' };
    case 'light':
      return { fontFamily: FONT_FAMILY_LIGHT, fontWeight: 'normal' };
    case 'boldMedium':
      return { fontFamily: FONT_FAMILY_DEMIBOLD, fontWeight: 'bold' };
    case 'semiBoldItalic':
      return { fontFamily: FONT_FAMILY_SEMIBOLDITALIC, fontWeight: 'bold' };
    case 'extraBold':
      return { fontFamily: FONT_EXTRA_BOLD, fontWeight: 'bold' };
    case 'sfMedium':
      return { fontFamily: FONT_FAMILY_SFMEDIUM, fontWeight: 'normal' };
    case 'sfProMedium':
      return { fontFamily: FONT_FAMILY_DISPLAYMedium, fontWeight: 'normal' };

    case 'sfProRegular':
      return { fontFamily: FONT_FAMILY_SFREGULAR, fontWeight: 'normal' };

    case 'heavy':
      return { fontFamily: FONT_FAMILY_DISPLAYHEAVY, fontWeight: '900' };

    case 'textBold':
      return { fontFamily: FONT_FAMILY_SFBOLD, fontWeight: 'bold' };

    default:
      return { fontFamily: FONT_FAMILY_REGULAR, fontWeight: 'normal' };
  }
}
