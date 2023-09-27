import React from "react";
import { ScreenBase } from "../ScreenBase";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import UiButton from "../../components/common/UiButton";
import UiText from "../../components/common/UiText";
import UiTextInput from "../../components/common/inputs/UiTextInput";

const Login = () => {
  const navigation = useNavigation();

  const handleLogin = () => {};

  return (
    <ScreenBase style={{ backgroundColor: "#111" }}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text>{"<"}</Text>
        </TouchableOpacity>
      </View>
      <UiText
        size={"extraLarge"}
        color={"white"}
        style={{ textAlign: "center", marginTop: 10, marginBottom: 40 }}
      >
        QuickServices
      </UiText>

      {/* //formulario login */}
      <View style={styles.formLogin}>
        <UiText fontWeight={"semibold"} size="subtitle" color={"white"}>
          Inicia sesión con tu correo y contraseña
        </UiText>
        <UiTextInput
          placeholderText={"Correo electrónico"}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <UiTextInput placeholderText={"Password"} secureTextEntry />
        <View style={{ gap: 8 }}>
          <UiButton
            text={"INGRESAR"}
            color={"white"}
            rounded
            onPress={() => handleLogin()}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <UiText
              size="small"
              style={{
                textDecorationLine: "underline",
                color: "gray",
                textAlign: "right",
              }}
            >
              Olvidé mi contraseña
            </UiText>
          </TouchableOpacity>
        </View>
        <View style={{ gap: 16 }}>
          <UiText style={{ color: "gray" }}>
            ¿Primera vez en QuickServices?
          </UiText>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <UiText
              size="subtitle"
              fontWeight={"bold"}
              style={{ textDecorationLine: "underline" }}
              color={"white"}
            >
              REGISTRARSE AQUÍ
            </UiText>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenBase>
  );
};
const styles = StyleSheet.create({
  header: { width: "100%", alignItems: "flex-start" },
  backButton: {
    padding: 8,
    backgroundColor: "white",
    borderRadius: 99,
    aspectRatio: 1 / 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formLogin: {
    gap: 25,
  },
});
export default Login;
