import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import theme from '../../config/theme.style'

type Styles = {
    container: ViewStyle,
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
  textTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontFamily: theme.FONT_FAMILY_TITLE,
    fontWeight: theme.FONT_WEIGHT_LIGHT,
    color: theme.COLOR_IVORY
  },
  textFlavor: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.FONT_FAMILY_CAPTION,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    color: theme.COLOR_IVORY
  },
  textRestaurant: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.FONT_FAMILY_THIN,
    fontWeight: theme.FONT_WEIGHT_HEAVY,
    color: theme.COLOR_IVORY
  }
})
