import React from 'react'
import { 
  Button,
  StyleSheet, 
  Text, 
  TextInput, 
  View,
  TouchableOpacity,
  ScrollView,
  Image,
 } from 'react-native'
 import { Formik } from 'formik'
 import * as Yup from 'yup'

 const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('*Required'),
  password: Yup.string().trim().min(8, 'Password is too short').required('*Required'),
  cnfrmpass: Yup.string().when('password', (password, field) =>
    password ? field.required().oneOf([Yup.ref('password')]) : field
  ),
})

const Password = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.head}>Forgot your password?</Text>
      <View style={styles.body}>
      <Formik
          initialValues={{ email: '', password: '', cnfrmpass: '' }}
          validationSchema={validationSchema}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View>
              <View style={styles.input}>
                <Image style={styles.img1} source={require('../../assets/email_2.png')} />
                <TextInput 
                  style={styles.text}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder='E-mail'
                  placeholderTextColor={'lightgrey'}
                /> 
              </View>
              {errors.email && touched.email ? (
                  <Text style={styles.error}>{errors.email}</Text>
                ) : null} 

              <View style={styles.input}>
                <Image style={styles.img1} source={require('../../assets/email_2.png')} />
                <TextInput 
                  style={styles.text}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder='password'
                  placeholderTextColor={'lightgrey'}
                />
              </View>
              {errors.password && touched.password ? (
                  <Text style={styles.error}>{errors.password}</Text>
                ) : null}

              <View style={styles.input}>
                <Image style={styles.img1} source={require('../../assets/email_2.png')} />
                <TextInput 
                  style={styles.text}
                  onChangeText={handleChange('cnfrmpass')}
                  onBlur={handleBlur('cnfrmpass')}
                  value={values.cnfrmpass}
                  placeholder='confirm password'
                  placeholderTextColor={'lightgrey'}
                />
              </View>
              {errors.password && touched.password ? (
                  <Text style={styles.error}>{errors.password}</Text>
                ) : null}  
              <TouchableOpacity onPress={handleSubmit}>
                 <View style={styles.Button}>
                    <Text style={styles.txt}>RESET PASSWORD</Text>
                 </View>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.Button}>
            <Text style={styles.txt}>BACK</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Password

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  head: {
    textAlign:'center',
    color:'black',
    fontSize: 25,
    marginTop: 60,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#E9E9E9',
    marginHorizontal: 26,
    marginBottom: 20,
    borderRadius: 20,
  },
  input:{
    marginTop: 25,
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
    height: 50,
  },
  img1:{
    marginTop: 5,
    marginHorizontal: 15,
  },
  text: {
    color: 'black',
  },
  Button: {
    marginHorizontal: 40,
    marginTop: 8,
    padding: 5,
    marginBottom: 15,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    alignItems: 'center',
  },
  txt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'right',
  },
})
