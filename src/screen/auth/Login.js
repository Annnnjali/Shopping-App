import React from 'react'
import { 
  Image, 
  Modal,
  Text, 
  View,
  TextInput, 
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { LoginUser } from '../../redux/actions/authAction'
import EStyleSheet from 'react-native-extended-stylesheet'
import Text_Input from '../../components/molecule/Text_Input'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('*Required'),
  password: Yup.string().trim().min(3, 'Password is too short').required('*Required'),
})

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(state => state.auth);
  
  const login = (value) => {
    dispatch(LoginUser(value));
  }

  return (
    <ScrollView style={styles.head}>
      {isLogin ? ( 
        <>
        <Modal
            transparent={true}
            visible={true}
          >
            <View style={styles.popup}>
              <Text style={styles.popup_txt}>SUCCESSFULLY LOGGED</Text>
            </View>
          </Modal>
        </>
      ) : ( 
        <>
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
              <Text_Input 
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder='E-mail'
              />
              {errors.email && touched.email ? (
                  <Text style={styles.error}>{errors.email}</Text>
                ) : null} 
              <Text_Input 
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder='Password'
              />
              {errors.password && touched.password ? (
                  <Text style={styles.error}>{errors.password}</Text>
                ) : null}
              <TouchableOpacity onPress={() => navigation.navigate("Password")}>
                <Text style={styles.text}>forgot password?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.btn}>
                  <Text style={styles.txt1}>SUBMIT</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </Formik>        
        <Text style={styles.txt2}>Don't have an account?
           <Text
             style={{fontWeight: 'bold', color: 'black'}} 
             onPress={() => navigation.navigate("Register")}> Register </Text>
        here</Text> 
      </View>
      </>
    )}
    </ScrollView>
  )
}

export default Login

const styles = EStyleSheet.create({
  popup: {
    backgroundColor: 'black',
    marginTop: 300,
    opacity: 0.7,
    margin: 20,
    borderRadius: 30,
  },
  popup_txt: {
    margin: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  popup_btn: {
    textAlign: 'center',
    color: '$DARK',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    marginHorizontal: 120,
    marginBottom: 20,
    borderRadius: 40,
    backgroundColor: 'red',
  },
  container1:{
    backgroundColor: '$DARK',
  },
  head:{
    flex: 1,
    backgroundColor: '#bc8f8f',
  },
  title:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
    color: '$DARK',
    marginTop: 60,
  },
  body:{
    flex: 1,
    marginTop: 50,
    backgroundColor: '$GREY',
    marginHorizontal: 26,
    marginBottom: 20,
    borderRadius: 20,
  },
  img:{
    height:170,
    marginHorizontal: 80,
  },
  txt:{
    fontSize: 15,
  },
  text: {
    color: '$DARK',
    marginTop: 7,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'right',
  },
  txt1:{
    color: '$WHITE',
    marginTop: 7,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'right',
  },
  btn: {
    marginHorizontal: 40,
    marginVertical: 20,
    padding: 2,
    paddingBottom: 5,
    backgroundColor: '#362222',
    borderRadius: 10,
    alignItems: 'center',
  },
  txt2:{
    marginTop: 15,
    fontSize: 15,
    textAlign: 'center',
    color: '$DARK',
    marginBottom: 15,
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '$ERROR',
    textAlign: 'right',
  },
});