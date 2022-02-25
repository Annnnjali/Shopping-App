import {Alert, Text, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from '../atoms/button/Button';

const ProductCard = ({navigation, item}) => {
  const handleButtonPress = () => {
    navigation.navigate('ProductDetails', {
      id: item.id,
    });
  };

  const handleButtonAlert = () => {
    Alert.alert(
      "ADDED TO CART"
    );
  };

  return (
    <View style={styles.productContainer}>
      <TouchableOpacity onPress={handleButtonPress}>
        <Image style={styles.img} source={{uri: item.image}} />
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>

        <Text numberOfLines={3} style={styles.desc}>
          {item.description}
        </Text>
      </TouchableOpacity>
      <Button text="ADD TO CART" onPress={handleButtonAlert} />
    </View>
  );
};

export default ProductCard;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '$BG_COLOR',
  },
  productContainer: {
    backgroundColor: '$CARD_BACKGROUND',
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '$DARK',
    marginBottom: 6,
    fontSize: 16,
  },
  desc: {
    color: '$DARK_LIGHT',
    marginBottom: 5,
    fontSize: 13,
  },
  img: {
    width: 140,
    height: 240,
    marginBottom: 5,
    borderRadius: 10,
    resizeMode: 'center',
  },
  button: {
    backgroundColor: '$PRIMARY',
    margin: 2,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
  txt2: {
    color: '$CARD_BACKGROUND',
  },
});
