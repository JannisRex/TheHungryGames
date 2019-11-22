import { StyleSheet, ViewStyle } from 'react-native'
import theme from '../../config/theme.style'

type Styles = {
  container: ViewStyle,
  scrollView: ViewStyle,
  content: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: theme.COLOR_BACKGROUND
  },
  scrollView: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 10
  }
})

export default styles
