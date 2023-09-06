import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from "./screens/RegisterScreen.js";
import ForgotPasswordScreen from './screens/ForgotPasswordScreen.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        
        {/* <Stack.Screen name="Inicio" component={Inicio} /> */}
        {/* Agrega aquí otras pantallas de navegación si es necesario */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
