import React, { useEffect, useState} from 'react'
import { 
  StyleSheet,
  Text, 
  TextInput, 
  View,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
 } from 'react-native'
 import { Formik } from 'formik'
 import { useDispatch, useSelector } from 'react-redux'
 import { RegisterUser } from '../../redux/actions/authAction'
 import * as Yup from 'yup';
 import EStyleSheet from 'react-native-extended-stylesheet'
 import { ActionTypes } from '../../redux/constants/productConstant'
 import Text_Input from '../../components/molecule/Text_Input'

 const validationSchema = Yup.object().shape({
  name: Yup.string().trim().min(3, 'Invalid name!').required('*Required'),
  email: Yup.string().email('Invalid email').required('*Required'),
  password: Yup.string().trim().min(8, 'Password is too short').required('*Required'),
  cnfrmpass: Yup.string().oneOf([Yup.ref('password')], 'Passwords does not match!'),
})

const Register = ({ navigation }) => {
  const dispatch = useDispatch();

  const { isRegistered } = useSelector(state => state.auth);


  const register = (value) => {
    dispatch(RegisterUser(value));
  }

  const handleModalOkPress = () => {
    navigation.navigate('Login') ;
    dispatch({type: ActionTypes.RESET_REGISER_STATE})

  }

  return (
    <ScrollView style={styles.head}>
      {isRegistered ? (
        <>
        <Modal
            transparent={true}
          >
            <View style={styles.popup}>
              <Text style={styles.popup_txt}>SUCCESSFULLY REGISTERED</Text>
              <TouchableOpacity>
                <View>
                  <Text onPress={handleModalOkPress} style={styles.popup_btn}>OK</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        </>
      ) : null }
    
      <Text style={styles.title}>REGISTER</Text>
      <View style={styles.body}>
      <Formik
          initialValues={{ name: '', email: '', password: '', cnfrmpass: '' }}
          onSubmit={values => register(values)}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View>
              <Text_Input 
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholder='Enter name'
                />
              {errors.name && touched.name ? (
                  <Text style={styles.error}>{errors.name}</Text>
                ) : null}
               <Text_Input 
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder='Enter email'
                />
              {errors.email && touched.email ? (
                  <Text style={styles.error}>{errors.email}</Text>
                ) : null}
              <Text_Input 
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  error={touched.password && errors.password}
                  value={values.password}
                  placeholder='Enter password'
                />
              {errors.password && touched.password ? (
                  <Text style={styles.error}>{errors.password}</Text>
                ) : null}
              <Text_Input 
                  onChangeText={handleChange('cnfrmpass')}
                  onBlur={handleBlur('cnfrmpass')}
                  error={touched.cnfrmpass && errors.cnfrmpass}
                  value={values.cnfrmpass}
                  placeholder='Confirm password'
                />
              {errors.cnfrmpass && touched.cnfrmpass ? (
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
        <Text style={styles.txt1}>Already have an account? 
         <Text 
          style={{fontWeight: 'bold', color: 'black'}} 
          onPress={() => navigation.navigate("Login")}> Login </Text> 
        here</Text> 
      </View>
    </ScrollView>
  )
}
export default Register;

const styles = EStyleSheet.create({
  popup: {
    backgroundColor: 'black',
    marginTop: 330,
    opacity: 0.7,
    margin: 40,
    borderRadius: 30,
  },
  popup_txt: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  popup_btn: {
    textAlign: 'center',
    color: '$DARK',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 5,
    marginHorizontal: 115,
    marginBottom: 10,
    borderRadius: 40,
    backgroundColor: 'red',
  },
  head:{
    flex:1,
    backgroundColor: '#bc8f8f',
  },
  title:{
    color: '$DARK',
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
    marginTop: 60,
  },
  body:{
    flex: 1,
    marginTop: 50,
    marginHorizontal: 23,
    backgroundColor: '$GREY',
    borderRadius: 20,
    marginBottom: 10,
    justifyContent: 'center',
  },
  btn: {
    marginHorizontal: 40,
    marginVertical: 20,
    padding: 6,
    backgroundColor: '#362222',
    borderRadius: 10,
    alignItems: 'center',
  },
  txt:{
    fontSize: 15,
  },
  txt1:{
    marginTop: 25,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 17, 
    color: '$DARK'
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '$ERROR',
    textAlign: 'right',
  },
  txt2: {
    color: '$WHITE',
    fontWeight: 'bold',
  }
})
