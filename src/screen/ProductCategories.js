import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../redux/actions/productAction';
import {fetchProductsCategory} from '../redux/actions/productActionCategory';
import EStyleSheet from 'react-native-extended-stylesheet';
import ProductCard from '../components/molecule/ProductCard';
import Image__ from '../components/atoms/image/Image__';
import SearchInput from '../components/molecule/SearchInput';
const ProductCategories = ({navigation}) => {
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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('categoryScreen', {category: item})
          }>
          <View style={styles.scrollview}>
            <Image
              style={styles.cat_img}
              source={require('../assets/womens.jpg')}
            />
            <Text style={styles.txt1}>{item}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderLoader = () =>
    isFetching ? <ActivityIndicator size="large" color="#333" /> : null;

  const renderHeader = ({item}) => (
    <View>
      <Image__ navigation={navigation} />

      <SearchInput navigation={navigation} />

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
    return <ProductCard navigation={navigation} item={item} />;
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

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '$BG_COLOR',
  },
  cat_container: {
    padding: 10,
  },
  cate: {
    flexDirection: 'row',
  },
  cart: {
    flexDirection: 'row',
  },
  scrollview: {
    margin: 5,
  },
  cat_img: {
    borderRadius: 50,
    margin: 10,
    padding: 50,
    width: 60,
    height: 60,
  },
  txt: {
    color: '$TEXT',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 5,
    margin: 10,
  },
  image: {
    height: 35,
    width: 35,
    margin: 7,
    marginLeft: 180,
    borderRadius: 10,
  },
  txt1: {
    color: '$TEXT',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 7,
    fontSize: 14,
  },
});
