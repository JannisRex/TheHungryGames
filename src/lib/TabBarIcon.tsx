import React from 'react'
import { Ionicons, MaterialIcons, MaterialCommunityIcons, EvilIcons, Feather, Entypo, FontAwesome, Foundation } from '@expo/vector-icons'
import theme from '../config/theme.style'

export default class TabBarIcon extends React.Component {
  render() {
    if (this.props.class === 'MaterialIcons') {
      return (
        <MaterialIcons
          name={this.props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={this.props.focused ? theme.COLOR_TINT : '#ccc'}
        />
      )
    } else if (this.props.class === 'EvilIcons') {
      return (
        <EvilIcons
          name={this.props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={this.props.focused ? theme.COLOR_TINT : '#ccc'}
        />
      )
    } else if (this.props.class === 'Feather') {
      return (
        <Feather
          name={this.props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={this.props.focused ? theme.COLOR_TINT : '#ccc'}
        />
      )
    } else if (this.props.class === 'MaterialCommunityIcons') {
      return (
        <MaterialCommunityIcons
          name={this.props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={this.props.focused ? theme.COLOR_TINT : '#ccc'}
        />
      )
    } else if (this.props.class === 'Entypo') {
      return (
        <Entypo
          name={this.props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={this.props.focused ? theme.COLOR_TINT : '#ccc'}
        />
      )
    } else if (this.props.class === 'FontAwesome') {
      return (
        <FontAwesome
          name={this.props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={this.props.focused ? theme.COLOR_TINT : '#ccc'}
        />
      )
    } else if (this.props.class === 'Foundation') {
      return (
        <Foundation
          name={this.props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={this.props.focused ? theme.COLOR_TINT : '#ccc'}
        />
      )
    }
    return (
      <Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? theme.COLOR_TINT : '#ccc'}
      />
    )
  }
}
