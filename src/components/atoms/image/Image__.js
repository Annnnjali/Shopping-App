import { TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Icon from 'react-native-vector-icons/FontAwesome';

const Image__ = ({navigation}) => {

  const handleButtonPress = () => {
    navigation.navigate('AddCart');
  };

  const handleButtonProfile = () => {
    navigation.navigate('Profile');
  };

  const handleButtonFavourite = () => {
    navigation.navigate('Favorite')
  }

  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={handleButtonFavourite}>
        <Image style={styles.image} source={require('../../../assets/fav.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleButtonProfile}>
        <Image style={styles.image} source={require('../../../assets/delivery-boy.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleButtonPress}>
        <Image style={styles.image} source={require('../../../assets/add_cart_1.jpg')} />
      </TouchableOpacity>
    </View>
  )
}

export default Image__

const styles = EStyleSheet.create({
    view: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
    },
    image: {
        height: 35,
        width: 35,
        margin: 7,
        borderRadius: 10,
       
      },
})