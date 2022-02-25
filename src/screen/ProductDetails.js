import { 
  Text, 
  View,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
 } from 'react-native';
import React, {useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProductsDetails } from '../redux/actions/productDetailsAction';
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from '../components/atoms/button/Button';

const ProductDetails = ({ route, navigation }) => { 
   const { id } = route.params;

  const dispatch = useDispatch();
  const ProductDetails  = useSelector(state => state.productsDetails);
  
  useEffect(() => {
    dispatch(fetchProductsDetails(id));
   }, [])

  const handleButtonPress = () => {
    navigation.goBack()
  } 

  const handleButtonAlert = () => {
    Alert.alert(
      "ADDED TO CART"
    );
  };

  return (
    <View style={styles.Container}>

      <TouchableOpacity onPress={() => navigation.navigate('AddCart')}>
        <Image style={styles.image} source={require('../assets/add_cart_1.jpg')} />
      </TouchableOpacity>
      
      <View>
        <Text style={styles.txt}>PRODUCT DETAILS</Text>
      </View>
      
      <ScrollView style={styles.productContainer}>
        <Image style={styles.img} source={{ uri: ProductDetails.image }} />

        <Text style={styles.title}>{ProductDetails.title}</Text>

        <Text style={styles.desc}>{ProductDetails.description}</Text>

        <Button text='ADD TO CART' style={styles.btn} onPress={handleButtonAlert} />

        <Button text='Back' onPress={handleButtonPress} />
      </ScrollView>
    </View>    
  )
}

export default ProductDetails;

const styles = EStyleSheet.create({
    Container: {
      flex: 1,
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
      textAlign: 'center',
      color: '$TEXT',
      fontSize: 20,
      fontWeight: 'bold',
    },
    productContainer: {
      padding: 20,
      backgroundColor: '$CARD_BACKGROUND',
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
        color: '$DARK',
        fontWeight: 'bold',
        fontSize: 15,
    },
    btn: {
        alignItems : 'center',
        backgroundColor: '$PRIMARY',
        marginVertical: 20,
        marginBottom: 60,
        marginHorizontal: 70,
        borderRadius: 30,
    },
    txt1: {
        color: '$BG_COLOR',
        fontWeight: 'bold',
        fontSize: 14,
        padding: 7,
    }
})