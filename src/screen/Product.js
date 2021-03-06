import React from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    Image, 
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productAction';

const Product = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.productContainer}>
        <Image style={styles.img} source={{uri: item.image}} />
        <Text numberOfLines={1} style={styles.title}>{item.title}</Text>

        <Text numberOfLines={3} style={styles.desc}>
          {item.description}
        </Text>
        <TouchableOpacity>
          <View>
            <Text onPress={() => navigation.navigate("ProductDetails",
            { image : item.image,
              title : item.title,
              desc: item.description,
               })} style={{color:'#000'}}>View details</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5,
    backgroundColor: '#dcdcdc',
  },
  productContainer: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 6,
  },
  desc: {
    color: '#a1a1a1',
    marginBottom: 5,
    fontSize:12
  },
  img: {
    width: 70,
    height: 70,
    marginBottom: 5,
    resizeMode: 'center',
  }
});
