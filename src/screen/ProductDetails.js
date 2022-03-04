import { 
  Text, 
  View,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
 } from 'react-native';
import React, {useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProductsDetails } from '../redux/actions/productDetailsAction';
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from '../components/atoms/button/Button';
import Image__ from '../components/atoms/image/Image__';

const ProductDetails = ({ route, navigation }) => { 
   const { id } = route.params;

  const dispatch = useDispatch();
  const { productDetails, isFetching}= useSelector(state => state.productsDetails);
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

  const handleButtonAlertFav = () => {
    Alert.alert(
      "ADDED TO FAVORITES"
    );
  };
    
  return (
    <View style={styles.Container}>

      <Image__ navigation={navigation} />
      
      <View>
        <Text style={styles.txt}>PRODUCT DETAILS</Text>
      </View>

     
      <ScrollView style={styles.productContainer} >
        {isFetching ? <ActivityIndicator size="large" color="#333" /> : null}

        <TouchableOpacity onPress={handleButtonAlertFav}>
          <Image style={styles.image} source={require('../assets/heart.png')} />
        </TouchableOpacity>

        <Image style={styles.img} source={{ uri: productDetails.image }} />

        <Text style={styles.title}>{productDetails.title}</Text>

        <Text style={styles.desc}>{productDetails.description}</Text>

        <Button text='ADD TO CART' onPress={handleButtonAlert} />

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
      width: 30,
      height: 30,
      marginBottom: 5,
      borderRadius: 10,
      resizeMode: 'center',
      alignSelf: 'flex-end',
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
    txt1: {
        color: '$BG_COLOR',
        fontWeight: 'bold',
        fontSize: 14,
        padding: 7,
    }
})