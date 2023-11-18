import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleResetPassword = () => {
    // Implementa aquí la lógica para restablecer la contraseña y enviar un correo de restablecimiento
    // Muestra el modal de éxito
    setIsModalVisible(true);
  };

  const closeModal = () => {
    // Cierra el modal y redirige al usuario a la pantalla de inicio de sesión
    setIsModalVisible(false);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QuickServices</Text>
      <Text style={styles.subtitle}>Olvidé mi contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        placeholderTextColor="white"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity
        style={styles.resetButton}
        onPress={handleResetPassword}
        disabled={!email}
      >
        <Text style={styles.resetButtonText}>Restablecer Contraseña</Text>
      </TouchableOpacity>

      {/* Modal de éxito */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Se ha enviado un correo de restablecimiento de contraseña a {email}.
              Por favor, sigue las instrucciones en el correo para cambiar tu contraseña.
            </Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingVertical: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 35,
    color: "white",
    backgroundColor: "black",
  },
  resetButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 35,
  },
  resetButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#ddd",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    fontSize: 16,
    color: "black",
  },
});

export default ForgotPasswordScreen;