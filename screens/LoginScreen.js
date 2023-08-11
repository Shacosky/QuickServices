import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/qsStyles.js"; // Asegúrate de importar tus estilos desde el archivo adecuado
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
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
      <Image source={require("../assets/icon.png")} style={styles.logo} />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.buttonStyle} onPress={handleLogin}>
        <Text style={styles.buttonStyleText}>Iniciar sesión</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.buttonStyle} onPress={handleLogin}>
        <Text style={styles.signUpText}>¿No tienes una cuenta? Regístrate</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
