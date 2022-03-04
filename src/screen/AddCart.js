import {
    StyleSheet, 
    Text, 
    View,
} from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

const AddCart = () => { 

  return (
    <View>
      <Text></Text>
      <Text style={styles.txt}>ADDED TO CART</Text>
    </View>
  );
};

export default AddCart;

const styles = EStyleSheet.create({
  txt: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
  }
});
