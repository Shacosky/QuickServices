import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/styles.js"; // Asegúrate de importar tus estilos desde el archivo adecuado
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    // Aquí puedes implementar la lógica de inicio de sesión
    // Por ejemplo, podrías validar las credenciales y redirigir a la pantalla principal
    navigation.navigate("ForgotPasswordScreen");
  };

  const handleRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QuickServices</Text>

      <Image source={require("../assets/icon.png")} style={styles.logo} />
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          onChangeText={(text) => setCorreoElectronico(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.buttonStyle} onPress={handleLogin}>
        <Text style={styles.buttonStyleText}>INGRESAR</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.buttonStyle} onPress={handleLogin}>
        <Text style={styles.signUpText}>¿No tienes una cuenta? Regístrate</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
