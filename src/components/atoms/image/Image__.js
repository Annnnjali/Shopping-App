import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

const Image__ = () => {

  return (
    <View>
      <Text> Image</Text>
    </View>
  )
}

export default Image__

const styles = EStyleSheet.create({
    image: {
        height: 35,
        width: 35,
        margin: 7,
        marginLeft: 180,
        borderRadius: 10,
      },
})