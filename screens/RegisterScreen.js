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
import Checkbox from "expo-checkbox";
import Icon from "react-native-vector-icons/FontAwesome";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleRegister = () => {
    // Implementar lógica de registro aquí
    // Redirigir a la pantalla de inicio de sesión
    // Mostrar el modal de felicitaciones
    setIsModalVisible(true);
  };

  const closeModal = () => {
    // Cerrar el modal y redirigir a la pantalla de inicio de sesión
    setIsModalVisible(false);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QuickServices</Text>
      <Text style={styles.subtitle}>Registra tus datos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        placeholderTextColor="white"
      />
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.inputWithIcon}
          placeholder="Contraseña"
          secureTextEntry={!passwordVisible}
          placeholderTextColor="white"
        />
        <Icon
          name={passwordVisible ? "eye-slash" : "eye"}
          size={20}
          color="white"
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible(!passwordVisible)}
        />
      </View>
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.inputWithIcon}
          placeholder="Confirmar contraseña"
          secureTextEntry={!confirmPasswordVisible}
          placeholderTextColor="white"
        />
        <Icon
          name={confirmPasswordVisible ? "eye-slash" : "eye"}
          size={20}
          color="white"
          style={styles.eyeIcon}
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
        />
      </View>
      <View style={styles.phoneContainer}>
        <TextInput
          style={[styles.input, styles.phonePicker]}
          placeholder="+56"
          placeholderTextColor="white"
        />
        <TextInput
          style={[styles.input, styles.phoneInput]}
          placeholder="Teléfono"
          keyboardType="phone-pad"
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox value={isTermsAccepted} onValueChange={setIsTermsAccepted} />
        <Text style={styles.checkboxLabel}>
          Acepto los términos y condiciones
        </Text>
      </View>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={handleRegister}
        disabled={!isTermsAccepted}
      >
        <Text style={styles.registerButtonText}>Registrarse</Text>
      </TouchableOpacity>

      {/* Modal de felicitaciones */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              ¡Felicidades! Te has registrado exitosamente.
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
  passwordInputContainer: {
    position: "relative",
    width: "80%",
  },
  inputWithIcon: {
    width: "100%",
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 35,
    color: "white",
    backgroundColor: "black",
    paddingRight: 40,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  phonePicker: {
    width: "30%",
    color: "white",
    backgroundColor: "black",
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  checkboxLabel: {
    color: "white",
    fontSize: 14,
  },
  registerButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 35,
  },
  registerButtonText: {
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

export default RegisterScreen;
