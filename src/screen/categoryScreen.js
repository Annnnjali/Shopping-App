import React from 'react';
import {
    Text, 
    View,
    Image, 
    FlatList,
    ActivityIndicator,
    TextInput
} from 'react-native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryProducts } from '../redux/actions/categoryAction';
import EStyleSheet from 'react-native-extended-stylesheet';
import ProductCard from '../components/molecule/ProductCard';
import Image__ from '../components/atoms/image/Image__';
import SearchInput from '../components/molecule/SearchInput';

const CategoryScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const dispatch = useDispatch();
  const { categories, isFetching} = useSelector(state => state.category);

  useEffect(() => {
    dispatch(fetchCategoryProducts(category));
  }, []);

  const renderLoader = () => 
    isFetching ? <ActivityIndicator size="large" color="#333" /> : null;
  
  const renderHeader = () => (
    <View>
        <Image__ navigation={navigation} />
        <SearchInput navigation={navigation}/>
      <View>
        <Text style={styles.txt}>{category}</Text>
      </View>
    </View>
  )

  const renderItem = ({item}) => {
    return (
      <ProductCard item={item} navigation={navigation}/>
    );
  };


  return (
    <View style={styles.container}>
    
      <FlatList
        data={categories}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={renderLoader}
        ListHeaderComponent={renderHeader}
      />
    
    </View>
  );
};

export default CategoryScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding:5,
    backgroundColor: '$BG_COLOR',
    
  },
  image: {
    height: 35,
    width: 35,
    marginTop: 10,
    marginLeft: 310,
    borderRadius: 10,
  },
  txt: {
      color: '$TEXT',
      fontWeight: 'bold',
      fontSize: 25,
      paddingHorizontal: 5,
      margin: 40,
      marginTop: 0,
      marginBottom: 20,
      textAlign: 'center',
      textTransform: 'uppercase',
  },
});
