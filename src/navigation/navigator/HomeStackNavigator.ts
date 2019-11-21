import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../../screens/home/main'

const HomeStackNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(HomeStackNavigation)
