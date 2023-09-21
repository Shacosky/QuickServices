import React, { useEffect, useState } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();

const customScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
  gestureDirection: "horizontal",
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
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
