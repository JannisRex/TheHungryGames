import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const smallWidth = 375

export default {
  screen: {
    width,
    height
  },
  isSmallDevice: width < smallWidth
}
