import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ScreenHomeBase } from "../screenTemplates/ScreenHomeBase";
import UiText from "../../components/common/UiText";
import UiButton from "../../components/common/UiButton";
import { useNavigation } from "@react-navigation/native";

const ReservesScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenHomeBase>
      <View style={styles.container}>
        <UiText size={'title'} fontWeight={'bold'}>Mis reservas</UiText>
        <View>
          <UiText >Todavía no tienes ninguna reserva.</UiText>
          <UiText >¿Qué estás esperando para comenzar?</UiText>
        </View>
        <UiButton rounded text={"RESERVA AQUÍ"} style={{width:'85%', alignSelf:'center'}} />
        <View style={{gap:8}}>
          <UiText size={'small'}>Quieres ver tus reservas anteriores?</UiText>
          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <UiText
              size="subtitle"
              fontWeight={"bold"}
              style={{ textDecorationLine: "underline" }}
              color={"black"}
            >
              REVISA AQUÍ
            </UiText>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenHomeBase>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
});

export default ReservesScreen;
