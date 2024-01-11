import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulating a loading delay for the splash screen
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000); // Duration of the splash screen in milliseconds

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/splash.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
