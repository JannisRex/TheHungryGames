import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import theme from '../../config/theme.style'

type Styles = {
  button: ViewStyle,
  errorHeader: TextStyle,
  errorInfo: ViewStyle,
  errorContainer: ViewStyle
}

// TODO fix types
export default StyleSheet.create<Styles>({
  button: {
    backgroundColor: theme.COLOR_BUTTON_DARK,
    borderRadius: 50,
    padding: 15
  },
errorHeader: {
    fontFamily: 'lato_lightitalic',
    fontSize: theme.FONT_SIZE_LARGE,
    fontStyle: 'normal',
    fontWeight: theme.FONT_WEIGHT_THIN,
    color: theme.ERROR_HEADER,
    textAlign: 'center'
  },
  errorInfo: {
    fontFamily: 'lato_hairline',
    fontSize: theme.FONT_SIZE_SMALL,
    fontStyle: 'normal',
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    color: theme.ERROR_TEXT,
    paddingVertical: 10
  },
  errorContainer: {
    flex: 1,
    marginHorizontal: 12,
    backgroundColor: theme.ERROR_BACKGROUND
  }
})
