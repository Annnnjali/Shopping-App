import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductCategories from "../screen/ProductCategories";
import ProductDetails from "../screen/ProductDetails";
import CategoryScreen from "../screen/categoryScreen";
import AddCart from "../screen/AddCart";

const Stack = createStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle:{
                        paddingLeft: 20,
                    }
                }}
                initialRouteName="ProductCategories"
            >
                <Stack.Screen name='ProductCategories' component={ProductCategories} />
                <Stack.Screen name='ProductDetails' component={ProductDetails} />
                <Stack.Screen name='categoryScreen' component={CategoryScreen} />
                <Stack.Screen name='AddCart' component={AddCart} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;