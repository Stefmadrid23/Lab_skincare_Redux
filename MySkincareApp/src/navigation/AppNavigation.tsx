import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Products from '../screens/Products';
import ProductDetail from '../screens/ProductDetail';
import Routines from '../screens/Routines';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Routines" component={Routines} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}