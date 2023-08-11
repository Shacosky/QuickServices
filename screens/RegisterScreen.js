import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/qsStyles.js'; // Asegúrate de importar tus estilos desde el archivo adecuado

const RegisterScreen = () => {
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  const handleRegister = () => {
    // Aquí puedes implementar la lógica de registro
    // Por ejemplo, podrías guardar los datos en una base de datos
    // y luego redirigir a la pantalla de inicio de sesión
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
