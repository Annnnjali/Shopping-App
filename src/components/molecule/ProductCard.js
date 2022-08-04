import {
  Alert,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from '../atoms/button/Button';
import {useDispatch} from 'react-redux';
import {fetchFavorites} from '../../redux/actions/favAction';
import {fetchAddCart} from '../../redux/actions/addCartAction';
import { addCartIncrement } from '../../redux/actions/addCartAction';
import { addCartDecrement } from '../../redux/actions/addCartAction';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const ProductCard = ({navigation, item}) => {
  const dispatch = useDispatch();
  const handleButtonPress = () => {
    navigation.navigate('ProductDetails', {
      id: item.id,
    });
  };

  const decrement = () => {
    dispatch(addCartDecrement({...item, quantity: (item.quantity)}))
  };

  const increment = () => {
    dispatch(addCartIncrement({...item, quantity: (item.quantity)}))
  };

  const handleButtonAddCart = () => {
    dispatch(fetchAddCart({...item, quantity: 1}));
  };

  const handleButtonFav = () => {
    dispatch(fetchFavorites(item));
  };

  return (
    <View style={styles.productContainer}>
      <TouchableOpacity onPress={handleButtonPress}>
        <ImageBackground style={styles.img} source={{uri: item.image}}>
          <TouchableOpacity onPress={handleButtonFav}>
            <Icon style={styles.image} name="heart" size={30} color="#000" />
          </TouchableOpacity>
        </ImageBackground>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>

        <Text numberOfLines={3} style={styles.desc}>
          {item.description}
        </Text>
      </TouchableOpacity>
      <View style={styles.cart}>
        <TouchableOpacity style={styles.countdesc} onPress={decrement}>
          <Text style={styles.sign}> - </Text>
        </TouchableOpacity>

        <Text style={styles.no}>{item.quantity}</Text>

        <TouchableOpacity style={styles.countincr} onPress={increment}>
          <Text style={styles.sign}> + </Text>
        </TouchableOpacity>
      </View>
      <Button text="ADD TO CART" onPress={handleButtonAddCart} />
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
  image: {
    width: 30,
    height: 30,
    marginBottom: 5,
    borderRadius: 10,
    //resizeMode: 'center',
    alignSelf: 'flex-end',
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
  cart: {
    flexDirection: 'row',
    marginVertical: 7,
  },
  countdesc: {
    marginRight: 6,
    borderRadius: 5,
    backgroundColor: '$PRIMARY',
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  countincr: {
    marginLeft: 6,
    borderRadius: 5,
    backgroundColor: '$PRIMARY',
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  sign: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  no: {
    color: '$DARK',
    paddingVertical: 5,
    paddingHorizontal: 6,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
