import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ScreenBase } from "../screenTemplates/ScreenBase";
import { useNavigation } from "@react-navigation/core";
import UiText from "../../components/common/UiText";
import UiButton from "../../components/common/UiButton";
import UiTextInput from "../../components/common/inputs/UiTextInput";

const ForgotPassword = () => {
  const navigation = useNavigation();

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
      <View style={{ gap: 24 }}>
        <UiText
          size={"extraLarge"}
          color={"white"}
          style={{ textAlign: "center", marginTop: 10, marginBottom: 40 }}
        >
          QuickServices
        </UiText>
        <UiText fontWeight={"semibold"} size={"subtitle"} color="white">
          Ingresa tu correo
        </UiText>
        <UiTextInput
          placeholderText={"Correo electrónico"}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <UiButton color={"white"} rounded text={"RECUPERAR CONTRASEÑA"}></UiButton>
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
});
export default ForgotPassword;
