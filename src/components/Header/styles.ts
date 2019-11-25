import { StyleSheet, ViewStyle } from 'react-native'
import theme from '../../config/theme.style'

type Styles = {
   container: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: theme.COLOR_HEADER,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  }
})

export default styles
