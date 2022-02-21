import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
 } from 'react-native';
import React, {useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProductsDetails } from '../redux/actions/productDetailsAction';


const ProductDetails = ({ route, navigation }) => { 
   const { id } = route.params;

  const dispatch = useDispatch();
  const ProductDetail = useSelector(state => state.productsDetails);
  
  useEffect(() => {
    dispatch(fetchProductsDetails(id));
   }, [])
  
  return (
    <View style={styles.Container}>
      
      <View>
        <Text style={styles.txt}>PRODUCT DETAILS</Text>
      </View>
      
      <ScrollView style={styles.productContainer}>
        <Image style={styles.img} source={{ uri: ProductDetail.image }} />

        <Text style={styles.title}>{ProductDetail.title}</Text>

        <Text style={styles.desc}>{ProductDetail.description}</Text>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.btn}>
            <Text style={styles.txt1}>Back</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>    
  )
}

export default ProductDetails;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: 'lightgrey',
    },
    txt: {
      textAlign: 'center',
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      paddingTop: 50,
    },
    productContainer: {
      padding: 20,
      backgroundColor: 'white',
      flex: 1,
      margin: 15,
      borderRadius: 25,
    },
    img: {
      marginVertical: 20,
      marginHorizontal: 45,
      justifyContent: 'center',
      height: 250,
      width: 200,
      resizeMode: 'center',
    },
    title: {
        paddingVertical: 15,
        fontSize: 20,
        color: '#800000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    desc: {
        padding: 10,
        textAlign: 'justify',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    },
    btn: {
        alignItems : 'center',
        backgroundColor: 'lightblue',
        marginVertical: 20,
        marginBottom: 60,
        marginHorizontal: 70,
        borderRadius: 30,
    },
    txt1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
        padding: 7,
    }
})