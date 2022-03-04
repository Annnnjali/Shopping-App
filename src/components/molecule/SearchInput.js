import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const SearchInput = () => {
  return (
    <View>
      <View style={styles.sort}>

             <Image style={styles.img} source={require('../../assets/search.png')} />
             <TextInput style={{color: 'black'}} placeholder='Search Here' placeholderTextColor={'lightgrey'}></TextInput>  
        
      </View>
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
    sort : {
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 20,
        flexDirection: 'row',
        opacity: 0.5,
      },
      img:{
        width: 25,
        height: 25,
        margin: 10,
        borderRadius: 30,
      },
})
