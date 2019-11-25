import { StyleSheet, ViewStyle, ImageStyle } from 'react-native'

type Styles = {
  [1]: ViewStyle,
  [2]: ViewStyle,
  [3]: ViewStyle,
  [4]: ViewStyle
}

export default StyleSheet.create<Styles>({
  [1]: {
    flex: 1,
    backgroundColor: 'red'
  },
  [2]: {
    flex: 2,
    backgroundColor: 'blue'
  },
  [3]: {
    flex: 3,
    backgroundColor: 'green'
  },
  [4]: {
    flex: 4,
    backgroundColor: 'yellow'
  }
})
