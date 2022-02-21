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
import { fetchCategoryProducts } from '../redux/actions/categoryAction';

const CategoryScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const dispatch = useDispatch();
  const categoryList = useSelector(state => state.category);

  useEffect(() => {
    dispatch(fetchCategoryProducts(category));
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
            { id: item.id,
               })} style={styles.text}>View details</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <View>
            <Text onPress={() => navigation.navigate("ProductCategories")} style={styles.text}>Back</Text>
          </View>
        </TouchableOpacity> */}
        
      </View>
    );
  };


  return (
    <View style={styles.container}>

      <Text style={styles.txt}>{category}</Text>
    
      <FlatList
        data={categoryList}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5,
    backgroundColor: '#dcdcdc',
    
  },
  txt: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 25,
      paddingHorizontal: 5,
      margin: 40,
      textAlign: 'center',
      textTransform: 'uppercase',
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
  text: {
    color: '#000',
    fontWeight: 'bold',
  },
  img: {
    width: 140,
    height: 240,
    marginBottom: 5,
    resizeMode: 'center',
  }
});
