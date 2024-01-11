import React, { useEffect, useState } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
import Login from "../screens/auth/Login";
import SignIn from "../screens/auth/SignIn";
import ForgotPassword from "../screens/auth/ForgotPassword";
import OnboardingScreen from "../screens/OnboardingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ReservesScreen from "../screens/reserves/ReservesScreen";
import MakeReserveScreen from "../screens/reserves/MakeReserveScreen";
import PaymentReserveScreen from "../screens/reserves/PaymentReserveScreen";
import MapScreen from "../screens/MapScreen";

const Stack = createStackNavigator();

const customScreenOptions = {
  ...TransitionPresets.FadeFromBottomAndroid,
  gestureDirection: "vertical",
  
};

export default function MainStack() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay for the splash screen
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Duration of the splash screen in milliseconds
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...customScreenOptions,
        }}
      >
        {isLoading ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        )}
        {/* Reserves */}
        <Stack.Screen name="Reserves" component={ReservesScreen} />
        <Stack.Screen name="MakeReserve" component={MakeReserveScreen} />
        <Stack.Screen name="PaymentReserve" component={PaymentReserveScreen} />
        {/* End-Reserves */}

        {/* //Auth */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        {/* //End-Auth */}

        {/* Others */}
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
