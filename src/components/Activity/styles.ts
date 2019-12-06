import { StyleSheet, ViewStyle } from 'react-native'
import theme from '../../config/theme.style'

type Styles = {
  container: ViewStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLOR_BACKGROUND
  }
})

export default styles
