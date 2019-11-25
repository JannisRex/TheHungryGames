import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import HomeStackNavigation from './HomeStackNavigator'
import SettingsScreen from '../../screens/settings/main'
import TabBarIcon from '../../lib/TabBarIcon'
import strings from '../../config/strings'
import theme from '../../config/theme.style'

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeStackNavigation,
    navigationOptions: { header: null }
  }
})

HomeStack.navigationOptions = {
  tabBarLabel: strings.Navigator.homeText,
  tabBarIcon: ({ focused }: any): JSX.Element => (
    <TabBarIcon
      focused={focused}
      name={'home'}
      class={'Entypo'}
    />
  )
}

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: { header: null }
  }
})

SettingsStack.navigationOptions = {
  tabBarLabel: strings.Navigator.settingsText,
  tabBarIcon: ({ focused }: any): JSX.Element => (
    <TabBarIcon
      class='Ionicons'
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-help-circle${focused ? '' : '-outline'}`
          : `md-help-circle${focused ? '' : '-outline'}`
      }
    />
  )
}

const TabConfig: any = {
  defaultNavigationOptions: {
    header: null
  },
  backBehaviour: 'initialRoute',
  lazy: true,
  adaptive: true,

  tabBarOptions: {
    activeBackgroundColor: theme.COLOR_NAV_ACTIVE,
    inactiveBackgroundColor: theme.COLOR_NAV_INACTIVE,
    activeTintColor: theme.COLOR_TINT,
    inactiveTintColor: theme.COLOR_IVORY,
    labelStyle: {
      fontSize: theme.FONT_SIZE_TINY,
      fontFamily: theme.FONT_FAMILY_CAPTION,
      fontWeight: theme.FONT_WEIGHT_MEDIUM,
      fontStyle: 'italic',
      color: theme.COLOR_IVORY,
      margin: 4,
      textShadowOffset: {
        width: 1.75,
        height: 1.75
      },
      textShadowColor: 'rgba(255,255,255,0.2)'
    }
  }
}

export default createBottomTabNavigator({
  HomeStack,
  SettingsStack
}, TabConfig)
