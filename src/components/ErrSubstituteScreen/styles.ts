import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import theme from '../../config/theme.style'

type Styles = {
  button: ViewStyle,
  buttonText: TextStyle,
  errorHeader: TextStyle,
  errorInfo: TextStyle,
  errorContainer: ViewStyle
}

// TODO fix variable string err
// when using theme = '200' e.g. => error
// fontWeight: string = '200' => O.K.
export default StyleSheet.create<Styles>({
  button: {
    backgroundColor: theme.COLOR_BUTTON_DARK,
    borderRadius: 50,
    padding: 15
  },
  buttonText: {
    color: '#fff',
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    textAlign: 'center'
  } as TextStyle,
  errorHeader: {
    fontFamily: theme.FONT_FAMILY_CAPTION,
    fontSize: theme.FONT_SIZE_LARGE,
    // fontStyle: 'normal',
    fontWeight: theme.FONT_WEIGHT_THIN,
    color: theme.ERROR_HEADER,
    textAlign: 'center'
  } as TextStyle,
  errorInfo: {
    fontFamily: theme.FONT_FAMILY_THIN,
    fontSize: theme.FONT_SIZE_SMALL,
    // fontStyle: 'normal',
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    color: theme.ERROR_TEXT,
    paddingVertical: 10
  } as TextStyle,
  errorContainer: {
    flex: 1,
    marginHorizontal: 12,
    backgroundColor: theme.ERROR_BACKGROUND
  }
})
