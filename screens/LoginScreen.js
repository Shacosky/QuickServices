import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Perform login logic if needed

    navigation.navigate("Register");
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/Logo_Perfil.png")}
        style={styles.logo}
      />
      <View style={styles.content}>
        <Text style={styles.title}>QuickServices</Text>
        <Text style={styles.subtitle}>
          Inicia sesión con tu correo y contraseña
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="gray"
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.linkText}>Olvidé mi contraseña</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerSubtitle}>
          ¿Primera vez en QuickServices?
        </Text>
        <Text style={styles.registerText} onPress={handleRegister}>
          REGISTRARSE AQUÍ
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingVertical: 40, // Espaciado vertical
  },
  logo: {
    width: 200, // Ancho de la imagen
    height: 200, // Alto de la imagen
    resizeMode: "contain", // Redimensionar la imagen
  },
  content: {
    width: "90%", // Ancho relativo al dispositivo
    alignItems: "center", // Alineado al centro
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    textAlign: "center", // Alineado al centro
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "white",
    textAlign: "center", // Alineado al centro
  },
  input: {
    width: "100%", // Ancho relativo al dispositivo
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 35,
    color: "white",
    backgroundColor: "black",
    alignSelf: "center", // Alineado al centro
  },
  loginButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 35,
    marginTop: 20,
    width: "80%",
    alignSelf: "center", // Alineado al centro
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  forgotPasswordContainer: {
    width: "100%", // Ancho relativo al dispositivo
    alignSelf: "flex-end", // Alineado a la derecha
    marginTop: 10,
    paddingRight: 20, // Espaciado derecho
  },
  linkText: {
    color: "white",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  registerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40, // Espaciado inferior
  },
  registerSubtitle: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
    marginBottom: 5, // Espaciado inferior
  },
  registerText: {
    fontSize: 16,
    color: "white",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
