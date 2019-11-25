import React from 'react'
import { View } from 'react-native'
import styles from './styles'

const Container = ({ children }: {children?: JSX.Element[] | JSX.Element}): JSX.Element => (
  <View style={styles.container}>
    {children}
  </View>
)

export default Container
