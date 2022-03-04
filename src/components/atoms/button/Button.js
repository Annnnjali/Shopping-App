import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.txt2}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        padding:5,
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
        fontSize: 13
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
        marginBottom: 30,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
      },
      txt2: {
        color: '$CARD_BACKGROUND',
        textAlign: 'center',
      }
})
