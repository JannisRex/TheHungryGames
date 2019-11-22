// @flow strict
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import DynamicScrollView from '../DynamicScrollView/main'
import styles from './styles.js'

type Props = {
    error: Error,
    resetError: () => void
}

const ErrSubstituteScreen = (props: Props) => (
  <DynamicScrollView color='grey'>
    <View style={styles.errorContainer}>
      <Text style={styles.errorHeader}>{'Es ist ein Fehler aufgetreten:'}</Text>
      <Text style={styles.errorInfo}>{props.error.toString()}</Text>
      <TouchableOpacity style={styles.button} onPress={props.resetError}>
        <Text style={styles.buttonText}>{'App neustarten.'}</Text>
      </TouchableOpacity>
    </View>
  </DynamicScrollView>
)

export default ErrSubstituteScreen
