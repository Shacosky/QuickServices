import React from "react";
import { ScreenBase } from "../screenTemplates/ScreenBase";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import UiText from "../../components/common/UiText";
import Icon from "react-native-vector-icons/FontAwesome";
import UiButton from "../../components/common/UiButton";

const PaymentReserveScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenBase style={{ backgroundColor: "#111" }}>
      <View style={{ gap: 28 }}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name={"angle-left"} size={20} color="black" />
          </TouchableOpacity>
        </View>
        <UiText size="title" color="white" fontWeight={"bold"}>
          ¿Qué fecha quieres programar tu servicio?
        </UiText>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 40,
            }}
          >
            <Icon name={"map-marker"} size={24} color="white" />
          </View>
          <View>
            <UiText size="small" color="white" style={{ opacity: 1 }}>
              Los Oficios 1598
            </UiText>
          </View>
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <UiText size="subtitle" color="white">
            Miércoles,16 de ago.
          </UiText>
          <View
            style={{
              width: "100%",
              height: 2,
              backgroundColor: "gray",
              marginVertical: 8,
            }}
          />
          <UiText size="subtitle" color="white">
            18:10
          </UiText>
        </View>
        <View style={{ gap: 16 }}>
          <UiText size="title" color="white" fontWeight={"bold"}>
            Opciones de pago
          </UiText>
          <UiText color="white">💵 Efectivo</UiText>
          <UiText color="white">🪪 Tarjeta de crédito o debito</UiText>

          <UiText color="white" size={"subtitle"}>
            Cupones
          </UiText>
          <View style={{width:'95%', alignSelf:'flex-end'}}>
            <TextInput
              placeholder="Ingresa el código de tu cupón"
              placeholderTextColor={"white"}
            ></TextInput>
            <View
              style={{
                width: "100%",
                height: 2,
                backgroundColor: "gray",
                marginVertical: 8,
              }}
            />
            <UiText size="small" color="gray">
              Ingrese el código para canjear el cupón y ocuparlo
            </UiText>
          </View>
        </View>
        <UiButton text="CONTINUAR" color="white" style={{marginTop:28}} rounded onPress={() => navigation.navigate("Map")}/>
      </View>
    </ScreenBase>
  );
};

const styles = StyleSheet.create({
  header: { width: "100%", alignItems: "flex-start", marginBottom: 4 },
  backButton: {
    padding: 4,
    backgroundColor: "white",
    borderRadius: 99,
    aspectRatio: 1 / 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PaymentReserveScreen;
