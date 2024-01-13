import React from "react";
import { ScreenBase } from "../screenTemplates/ScreenBase";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import UiText from "../../components/common/UiText";
import Icon from "react-native-vector-icons/FontAwesome";
import UiButton from "../../components/common/UiButton";
import BackButton from "../../components/common/buttons/BackButton";

const PaymentReserveScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenBase dark>
      <BackButton/>
      <View style={{ gap: 28 }}>
        
    
        <Text className="text-white text-2xl mt-8 font-bold">
          Opciones de pago

        </Text>
        
        <View style={{ gap: 16 }}>
          <Text className="text-white">método de pago </Text>
          <UiText color="white">💵 Efectivo</UiText>
          <UiText color="white">🪪 Tarjeta de crédito o debito</UiText>

          <UiText color="white" size={"subtitle"}>
            Cupones
          </UiText>
          <View style={{width:'95%', alignSelf:'flex-end'}}>
            <TextInput
              placeholder="Ingresa el código de tu cupón"
              placeholderTextColor={"white"}
              className="w-full  text-white"
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
        <UiButton text="CONTINUAR" color="white" style={{marginTop:28}} rounded onPress={() => navigation.navigate("RequestDetails")}/>
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
