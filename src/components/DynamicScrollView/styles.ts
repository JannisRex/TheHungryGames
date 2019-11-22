import { StyleSheet } from 'react-native'
import theme from '../../config/theme.style'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLOR_BACKGROUND
  },
  scrollview: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 10
  }
})

export default styles
