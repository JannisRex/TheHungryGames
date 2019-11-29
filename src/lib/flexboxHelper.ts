import { Dimensions, StyleSheet, ViewStyle } from 'react-native'

type Styles = {
  a1: ViewStyle,
  a2: ViewStyle,
  a3: ViewStyle,
  a4: ViewStyle
}

const { width } = Dimensions.get('window')

export default StyleSheet.create<Styles>({
  a1: {
    flex: 3,
    backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width
  },
  a2: {
    flex: 2,
    backgroundColor: 'blue',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width
  },
  a3: {
    flex: 1.5,
    backgroundColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width
  },
  a4: {
    flex: 1,
    backgroundColor: 'yellow',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width
  }
})
