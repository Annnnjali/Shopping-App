import React from 'react'
import { 
  Image, 
  StyleSheet, 
  Text, 
  View,
  TextInput, 
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { LoginUser } from '../../redux/actions/authAction'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('*Required'),
  password: Yup.string().trim().min(3, 'Password is too short').required('*Required'),
})

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  

  const login = (value) => {
    dispatch(LoginUser(value));
  }

  return (
    <ScrollView style={styles.head}>
      <View>
        <Text style={styles.title}>LOGIN</Text>
      </View>
      <View style={styles.body}>
        <Image style={styles.img} source={require('../../assets/id-card.png')} />
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={values => login(values)}
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
              <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.btn}>
                  <Text style={styles.txt1}>SUBMIT</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
        <TouchableOpacity onPress={() => navigation.navigate("Password")}>
          <Text style={styles.txt1}>forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <View> 
            <Image style={styles.img2} source={require('../../assets/next_1.png')} />
          </View>
        </TouchableOpacity>        
        <Text style={styles.txt2}>Don't have an account?
           <Text
             style={{fontWeight: 'bold', color: 'black'}} 
             onPress={() => navigation.navigate("Register")}> Register </Text>
        here</Text>   
      </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  head:{
    flex: 1,
  },
  title:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
    color: 'black',
    marginTop: 60,
  },
  body:{
    flex: 1,
    marginTop: 40,
    backgroundColor: '#E9E9E9',
    marginHorizontal: 26,
    marginBottom: 20,
    borderRadius: 20,
  },
  text: {
    color: 'black',
  },
  img:{
    height:170,
    marginHorizontal: 80,
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
  txt:{
    fontSize: 15,
  },
  txt1:{
    color: 'black',
    marginTop: 7,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'right',
  },
  img2:{
    marginTop: 15,
    marginHorizontal: 125,
  },
  btn: {
    marginHorizontal: 40,
    marginTop: 8,
    padding: 2,
    paddingBottom: 5,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    alignItems: 'center',
  },
  txt2:{
    marginTop: 15,
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
    marginBottom: 15,
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'right',
  },
});