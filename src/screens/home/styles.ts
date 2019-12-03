import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import theme from '../../config/theme.style'

type Styles = {
    container: ViewStyle,
    text: TextStyle,
    textTitle: TextStyle,
    textFlavor: TextStyle,
    textRestaurant: TextStyle
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: theme.FONT_SIZE_SMALL,
    fontFamily: theme.FONT_FAMILY_TEXT,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    color: theme.COLOR_HONEYDEW
  } as TextStyle,
  textTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontFamily: theme.FONT_FAMILY_TITLE,
    fontWeight: theme.FONT_WEIGHT_LIGHT,
    color: theme.COLOR_IVORY,
    textShadowColor: '#000',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  } as TextStyle,
  textFlavor: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.FONT_FAMILY_CAPTION,
    fontWeight: theme.FONT_WEIGHT_LIGHT,
    color: theme.COLOR_IVORY,
    textShadowColor: '#000',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5
  } as TextStyle,
  textRestaurant: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.FONT_FAMILY_THIN,
    fontWeight: theme.FONT_WEIGHT_HEAVY,
    color: theme.COLOR_IVORY,
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: -0.5 },
    textShadowRadius: 15
  } as TextStyle
})
