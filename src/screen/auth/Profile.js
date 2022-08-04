import React from 'react'
import { 
  Button,
  Image,
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { logOut } from '../../redux/actions/authAction'
import EStyleSheet from 'react-native-extended-stylesheet'

const Profile = ({ navigation }) => {
  const { userDetails } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const log_out = () => {
    dispatch(logOut());
  }

  return (
    <View style={styles.head}>
      <View>
        <Text style={styles.title}>PROFILE</Text>
      </View>
      <View style={styles.body}>
        <Image style={styles.img} source={require('../../assets/delivery-boy.png')}/>
      
      <View style={styles.details}>
        <Text style={styles.txt}>NAME: {userDetails.name}</Text>
        <Text style={styles.txt}>E-MAIL: {userDetails.email}</Text>
      </View>
      <TouchableOpacity onPress={() => (log_out())}> 
        <View style={styles.btn}>
        <Text style={styles.footer}>LOGOUT</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Profile

const styles = EStyleSheet.create({
  head:{
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  details: {
    margin: 30,
  },
  title:{
    marginTop: 60,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 36,
    textAlign: 'center',
  },
  txt:{
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  img:{
    marginTop: 90,
    marginHorizontal: 100,
  },
  btn:{
    marginTop: 70,
    marginHorizontal: 100,
    borderRadius: 20,
    backgroundColor: '#D62828',
    height: 60,
  },
  footer:{
    textAlign: 'center',
    marginTop: 16,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  }
})
