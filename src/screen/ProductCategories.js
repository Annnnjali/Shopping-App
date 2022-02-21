import React from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    Image, 
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productAction';
import { fetchProductsCategory } from '../redux/actions/productActionCategory';

const ProductCategories = ({ navigation }) => {
  const dispatch = useDispatch();
  const {products, isFetching} = useSelector(state => state.products);
  const category = useSelector(state => state.productsCategory);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProductsCategory());
  }, []);

  const renderCategory = ({item}) => {
    return (
      <View style={styles.cat_container}>
        <TouchableOpacity onPress={() => navigation.navigate('categoryScreen', { category : item})}>
          <View style={styles.scrollview}>
            <Image style={styles.cat_img} source={require('../assets/womens.jpg')} />
            <Text style={styles.txt1}>{item}</Text>
          </View> 
        </TouchableOpacity>
      </View>
    );
  };

  const renderLoader = () => 
    isFetching ? <ActivityIndicator size="large" color="#333" /> : null;

  const renderHeader = () => (
    <View>
      <Text style={styles.txt}>Categories</Text>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        data={category}
        renderItem={renderCategory}
        keyExtractor={data => data}
      />
      <Text style={styles.txt}>Products</Text>
    </View>
  );

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
            { id: item.id,
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
        ListFooterComponent={renderLoader}
        ListHeaderComponent={renderHeader}
        initialNumToRender={10}  
      />
    </View>
  );
};

export default ProductCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5,
    backgroundColor: '#dcdcdc',
    
  },
  cat_container: {
    padding: 10,
  },
  cate: {
      flexDirection: 'row',
  },
  scrollview:{
    margin: 5,
  },
  cat_img: {
    borderRadius: 200,
    resizeMode: 'center',
    margin: 10,
    padding: 50,
    width: 60,
    height: 70,
  },
  txt: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
      paddingHorizontal: 5,
      margin: 10,
  },
  txt1: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 7,
    fontSize: 14,
  },
  productContainer: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 6,
    fontSize: 16,
  },
  desc: {
    color: '#a1a1a1',
    marginBottom: 5,
    fontSize: 13
  },
  img: {
    width: 140,
    height: 240,
    marginBottom: 5,
    resizeMode: 'center',
  }
});
