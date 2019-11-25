// @flow strict
import React, { Component } from 'react'
import { SafeAreaView, StatusBar, View, ScrollView, Dimensions } from 'react-native'
import styles from './styles'

const { height } = Dimensions.get('window')

// TODO: fix types i.e. remove Flow shit
type Props = {
  children: Node,
  color: string
}

type State = {
  screenHeight: number
}

export default class DynamicScrollView extends Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      screenHeight: height
    }
  }

  _handleContentSizeChange: any = (contentWidth: number, contentHeight: number): void => {
    this.setState({ screenHeight: contentHeight })
  }

  render(): JSX.Element | Node {
    const { color, children } = this.props
    const scrollEnabled = this.state.screenHeight > height
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: color }]}>
        <StatusBar barStyle='light-content' backgroundColor='#468189' />
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollView}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this._handleContentSizeChange}
        >
          <View style={styles.content}>
            {children}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
