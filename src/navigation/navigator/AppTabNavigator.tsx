import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import HomeStackNavigation from './HomeStackNavigation'
import SettingsScreen from '../screens/settings/main'
import TabBarIcon from '../../lib/TabBarIcon'
import strings from '../../config/strings'

const HomeStack = createStackNavigator({
  Home: HomeStackNavigation
})

HomeStack.navigationOptions = {
  tabBarLabel: strings.Navigator.homeText,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={"home"}
      class={"Entypo"}
    />
  )
}

const SettingsStack = createStackNavigator({
  SettingsScreen: SettingsScreen
})

SettingsStack.navigationOptions = {
  tabBarLabel: strings.Navigator.settingsText,
  tabBarIcon: ({ focused }) => (
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
  SettingsScreen
})
