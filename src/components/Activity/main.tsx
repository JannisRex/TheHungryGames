import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import styles from './styles'

const Activity: any = (): JSX.Element => (
  <View style={styles.container}>
    <ActivityIndicator size='large' color='#ffff'/>
  </View>
)

export default Activity
