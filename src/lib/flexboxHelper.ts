import { StyleSheet, ViewStyle } from 'react-native'

type Styles = {
  a1: ViewStyle,
  a2: ViewStyle,
  a3: ViewStyle,
  a4: ViewStyle
}

export default StyleSheet.create<Styles>({
  a1: {
    flex: 1,
    backgroundColor: 'red'
  },
  a2: {
    flex: 2,
    backgroundColor: 'blue'
  },
  a3: {
    flex: 3,
    backgroundColor: 'green'
  },
  a4: {
    flex: 4,
    backgroundColor: 'yellow'
  }
})
