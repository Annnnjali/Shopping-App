import React from 'react'
import { 
  StyleSheet,
  Text, 
  TextInput, 
  View,
  Image,
  ScrollView,
  TouchableOpacity,
 } from 'react-native'
 import { Formik } from 'formik'
 import * as Yup from 'yup';

 const validationSchema = Yup.object().shape({
  name: Yup.string().trim().min(3, 'Invalid name!').required('*Required'),
  email: Yup.string().email('Invalid email').required('*Required'),
  password: Yup.string().trim().min(8, 'Password is too short').required('*Required'),
  cnfrmpass: Yup.string().when('password', (password, field) =>
    password ? field.required().oneOf([Yup.ref('password')]) : field
  ),
})

const Register = ({ navigation }) => {
  return (
    <ScrollView style={styles.head}>
      <Text style={styles.title}>REGISTER</Text>
      <View style={styles.body}>
      <Formik
          initialValues={{ name: '', email: '', password: '', cnfrmpass: '' }}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View>
              <View style={styles.input}>
                <Image style={styles.img} source={require('../../assets/email_2.png')} />
                <TextInput 
                  style={styles.text}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholder='Enter name'
                  placeholderTextColor={'lightgrey'}
                />
              </View>
              {errors.name && touched.name ? (
                  <Text style={styles.error}>{errors.name}</Text>
                ) : null}
              <View style={styles.input}>
                <Image style={styles.img} source={require('../../assets/email_2.png')} />
                <TextInput 
                  style={styles.text}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder='Enter email'
                  placeholderTextColor={'lightgrey'}
                />
              </View>
              {errors.email && touched.email ? (
                  <Text style={styles.error}>{errors.email}</Text>
                ) : null}
              <View style={styles.input}>
                <Image style={styles.img} source={require('../../assets/email_2.png')} />
                <TextInput 
                  style={styles.text}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  error={touched.password && errors.password}
                  value={values.password}
                  placeholder='Enter password'
                  placeholderTextColor={'lightgrey'}
                />
              </View>
              {errors.password && touched.password ? (
                  <Text style={styles.error}>{errors.password}</Text>
                ) : null}
              <View style={styles.input}>
                <Image style={styles.img} source={require('../../assets/email_2.png')} />
                <TextInput 
                  style={styles.text}
                  onChangeText={handleChange('cnfrmpass')}
                  onBlur={handleBlur('cnfrmpass')}
                  error={touched.cnfrmpass && errors.cnfrmpass}
                  value={values.cnfrmpass}
                  placeholder='Confirm password'
                  placeholderTextColor={'lightgrey'}
                />
              </View>
              {errors.cnfrmpassword && touched.cnfrmpass ? (
                  <Text style={styles.error}>{errors.cnfrmpass}</Text>
                ) : null}
              <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.btn}>
                  <Text style={styles.txt2}>SUBMIT</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image style={styles.img1} source={require('../../assets/next_1.png')} />
        </TouchableOpacity>
        <Text style={styles.txt1}>Already have an account? 
         <Text 
          style={{fontWeight: 'bold', color: 'black'}} 
          onPress={() => navigation.navigate("Login")}> Login </Text> 
        here</Text>
      </View>
    </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
  head:{
    flex:1,
  },
  title:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
    marginTop: 60,
  },
  body:{
    flex: 1,
    marginTop: 50,
    marginHorizontal: 23,
    backgroundColor: '#E9E9E9',
    borderRadius: 20,
    marginBottom: 10,
    justifyContent: 'center',
  },
  input:{
    marginTop: 18,
    marginHorizontal: 32,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10, 
    height: 50, 
  },
  btn: {
    marginHorizontal: 40,
    marginTop: 15,
    padding: 6,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
  img:{
    marginHorizontal: 15,
    marginTop: 5,
  },
  txt:{
    fontSize: 15,
  },
  img1:{
    marginTop: 30,
    marginHorizontal: 125,
  },
  txt1:{
    marginTop: 25,
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 17, 
    color: 'black'
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'right',
  },
  txt2: {
    color: 'black',
    fontWeight: 'bold',
  }
})


/*
import React from 'react'
import { View, Text } from 'react-native'
import Register from './src/screen/Register'
export default function App() {
  return (
    
        <Register />

  )
}
*/