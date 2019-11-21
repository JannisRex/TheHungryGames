import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import HomeStackNavigation from './HomeStackNavigator'
import SettingsScreen from '../../screens/settings/main'
import TabBarIcon from '../../lib/TabBarIcon'
import strings from '../../config/strings'

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeStackNavigation,
    navigationOptions: { header: null }
  }
})

HomeStack.navigationOptions = {
  tabBarLabel: strings.Navigator.homeText,
  tabBarIcon: ({ focused }: boolean): JSX.Element => (
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
  tabBarIcon: ({ focused }: boolean): JSX.Element => (
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

export default createBottomTabNavigator({
  HomeStack,
  SettingsStack
})
