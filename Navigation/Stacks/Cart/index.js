import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../../../Screens/CartScreen';
import { colors } from '../../../Styles/colors';

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator initialRouteName=""
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.darkBlue
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "Koulen",
          fontSize: 28,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Carrito"
        }}
      >

      </Stack.Screen>

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})

export default CartStack
