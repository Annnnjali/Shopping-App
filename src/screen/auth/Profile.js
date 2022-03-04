import React from 'react'
import { 
  Button,
  Image,
  StyleSheet, 
  Text, 
  View, 
} from 'react-native'
import { useSelector } from 'react-redux'

const Profile = ({ navigation }) => {
  const { userDetails } = useSelector(state => state.auth);

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
      <View style={styles.btn}>
        <Text 
          style={styles.footer} 
          onPress={() => navigation.navigate("Login")}>LOGOUT</Text>
      </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
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

/*
import React from 'react'
import { View, Text } from 'react-native'
import Profile from './src/screen/Profile'
export default function App() {
  return (
    
        <Profile />

  )
}
*/