import React, {useState, useEffect} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    Image, 
    FlatList,
    Modal,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [show , setShow] = useState(false);
  const [productdetail, setProductdetail] = useState({});

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com//products');
    setProducts(response.data);
  }; 

  const getShow = (item) => {
    setProductdetail({
      img: item.image,
      title: item.title,
      Desc: item.description,
    })
    setShow(true);
  };

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
            <Text onPress={() => getShow(item)} style={{color:'#333'}}>View details</Text>
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
      <Modal
          animationType='slide'
          transparent={false}
          visible={show}
        >
          <View style={styles.container1}>
            <Image style={styles.img1} source={{uri: productdetail.img}} />
            <Text style={styles.title1}>{productdetail.title}</Text>

            <Text numberOfLines={5} style={styles.desc1}>{productdetail.Desc}</Text>
            <TouchableOpacity>
              <View>
                <Text onPress={() => {setShow(false)} } style={styles.txt}>Back</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
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
  },
  container1:{
    flex:1,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 3,
    marginVertical: 100,
    marginHorizontal: 40,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center'
  },
  img1:{
    width: 290,
    height: 240,
    marginBottom: 15,
    resizeMode: 'center',
  },
  title1:{
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 12,
  },
  desc1:{
    fontSize: 13,
    color: '#a1a1a1',
  },
  txt:{
    color:'#333',
    backgroundColor: 'lightblue',
    margin: 20,
    borderRadius: 10,
    padding: 10,
    fontWeight:'bold',
  }
});
