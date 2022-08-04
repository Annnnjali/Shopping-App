import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProductCategories from '../screen/ProductCategories';
import ProductDetails from '../screen/ProductDetails';
import CategoryScreen from '../screen/categoryScreen';
import AddCart from '../screen/AddCart';
import Login from '../screen/auth/Login';
import Profile from '../screen/auth/Profile';
import Register from '../screen/auth/Register';
import Password from '../screen/auth/Password';
import Favorite from '../screen/Favorite';
import SplashScreen from '../screen/SplashScreen';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const Navigation = () => {
  const {isLogin, isRegistered} = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}>
        {isLogin ? (
          <>
            <Stack.Screen
              name="ProductCategories"
              component={ProductCategories}
            />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen
              name="categoryScreen"
              component={CategoryScreen}
              options={{headerShown: true}}
            />
            <Stack.Screen name="AddCart" component={AddCart} />
            <Stack.Screen name="Favorite" component={Favorite} />
            <Stack.Screen name="Profile" component={Profile} />
          </>
        ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Password" component={Password} />
              <Stack.Screen name="Register" component={Register} />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
