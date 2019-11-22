import { StyleSheet, ViewStyle} from 'react-native'
import theme from '../../config/theme.style'

type Style = {
  container: ViewStyle
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: theme.COLOR_BACKGROUND
  }
})
