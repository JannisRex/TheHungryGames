import { StyleSheet, ViewStyle } from 'react-native'

type Styles = {
    container: ViewStyle
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
