import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./background.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Text style={styles.title}>¡Bienvenido a mi aplicación!</Text>
          <Text style={styles.subtitle}>Explora y disfruta</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default HomeScreen;
