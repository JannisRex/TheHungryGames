import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AppTabNavigation from './AppTabNavigator'
import LoadingScreen from '../../screens/initialLoad/main'

export default createAppContainer(createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppTabNavigation
  },
  {
    initialRouteName: 'Loading',
    backBehavior: 'none'
  }
))
