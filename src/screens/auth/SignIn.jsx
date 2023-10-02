import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { ScreenBase } from "../ScreenBase";
import { useNavigation } from "@react-navigation/core";
import UiText from "../../components/common/UiText";
import UiTextInput from "../../components/common/inputs/UiTextInput";
import UiPhoneInput from "../../components/common/inputs/UiPhoneInput";
import { Checkbox } from "react-native-paper";
import UiButton from "../../components/common/UiButton";
import WelcomeModal from "../../components/modals/WelcomeModal";

const SignIn = () => {
  const navigation = useNavigation();
  const [termsChecked, setTermsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScreenBase style={{ backgroundColor: "#111" }}>
      <WelcomeModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <ScrollView>
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
        <View style={styles.formSignIn}>
          <UiText fontWeight={"semibold"} size={"subtitle"} color="white">
            Registra tus datos
          </UiText>
          <UiTextInput placeholderText={"Nombre"} />
          <UiTextInput placeholderText={"Apellido"} />
          <UiTextInput
            placeholderText={"Correo electrónico"}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <UiTextInput placeholderText={"Contraseña"} secureTextEntry />
          <UiTextInput
            placeholderText={"Confirmar contraseña"}
            secureTextEntry
          />
          <UiPhoneInput placeholderText={"Número de teléfono"} />
          <View
            style={{
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Checkbox
              status={termsChecked ? "checked" : "unchecked"}
              color="white"
              onPress={() => setTermsChecked(!termsChecked)}
            />
            <TouchableOpacity>
              <UiText
                color="white"
                size="small"
                style={{ textDecorationLine: "underline" }}
              >
                Acepto los términos y condiciones
              </UiText>
            </TouchableOpacity>
          </View>
          <UiButton
            rounded
            text={"INGRESAR"}
            color={"white"}
            onPress={() => { setIsOpen(true)}}
          ></UiButton>
        </View>
      </ScrollView>
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
  formSignIn: {
    gap: 16,
    marginBottom: 16,
  },
});
export default SignIn;
