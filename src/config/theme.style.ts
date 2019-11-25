import { Platform } from 'react-native'
const isIOS = Platform.OS === 'ios'

export default {
  // Basic Font Options
  COLOR_TEXT: 'rgb(255, 255, 240)',
  FONT_FAMILY_TITLE: 'impact',
  FONT_FAMILY_CAPTION: 'latoLightitalic',
  FONT_FAMILY_THIN: 'latoHairline',
  FONT_FAMILY_TEXT_ANDROID: 'Roboto',
  FONT_FAMILY_TEXT_IOS: 'San Francisco',
  // FONT_FAMILY_TEXT: isIOS ? 'San Francisco' : 'Roboto',
  FONT_FAMILY_TEXT: isIOS ? 'robotoCondensed' : 'Roboto',

  FONT_SIZE_TINY: 15,
  FONT_SIZE_SMALL: 20,
  FONT_SIZE_MEDIUM: 26,
  FONT_SIZE_LARGE: 35,
  FONT_SIZE_LARGER: 42,
  FONT_SIZE_TESTING: 55,
  FONT_WEIGHT_THIN: '100',
  FONT_WEIGHT_LIGHT: '300',
  FONT_WEIGHT_MEDIUM: '600',
  FONT_WEIGHT_HEAVY: '800',

  // some basic Colors to use
  COLOR_WHITE: 'rgb(255, 255, 255)',
  COLOR_IVORY: 'rgb(255, 255, 240)',
  COLOR_HONEYDEW: 'rgb(240, 255, 240)',
  COLOR_LIGHTGRAY: 'rgb(159,161,163)',
  COLOR_DARKGRAY: 'rgb(55, 58, 60)',
  COLOR_DARKERGRAY: 'rgb(35, 38, 40)',
  COLOR_BUTTON_DARK: '#2E1114',
  COLOR_TINT: '#2f95dc',

  COLOR_HEADER: '#163c4f',
  COLOR_BACKGROUND: '#2f4047',
  COLOR_NAV_A: '#263339',
  COLOR_NAV_B: '#1E292E',

  // generic Warning/Error message colors
  WARNING_BACKGROUND: '#EAEB5E',
  WARNING_TEXT: '#666804',
  ERROR_BACKGROUND: '#45b3e0',
  ERROR_TEXT: '#2E1114',
  ERROR_HEADER: '#1b0a0c'
}
