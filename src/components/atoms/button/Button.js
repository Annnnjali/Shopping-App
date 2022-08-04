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
