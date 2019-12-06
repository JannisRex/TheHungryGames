import React, { Component } from 'react'
import { PreloadSwitchNavigator } from './src/navigation/index'
import { ErrorBoundary } from './src/components/index'
import { StatusBar } from 'react-native'


class App extends Component {
  componentDidMount(): void {
    StatusBar.setHidden(true)
  }

  render(): JSX.Element {
    return (
      <PreloadSwitchNavigator />
    )
  }
}

export default App
