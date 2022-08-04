import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'

const SplashScreen = () => {

  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/delivery-boy.png')}/>
        <Text style={styles.screen}>SplashScreen</Text>

        <ActivityIndicator
            animating={true}
            color='#FFFFFF'
            size= 'large'
            style={styles.activityIndicator}
        />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    image: {
        justifyContent: 'center',
        marginTop: 200,
        marginLeft: 75,
        height: 200,
        width: 200,
    },
    screen:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 100,
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    }
})