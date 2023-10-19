import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import UiText from "./common/UiText";
import { useNavigation, useRoute } from "@react-navigation/native";

const BottomNav = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const routeName = route.name;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.iconBtn, routeName != "Home" && styles.disabled]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.containerIcon}>
          <Icon name="home" size={24} color="black" />
        </View>
        <UiText color={"white"} size={"small"} fontWeight={"light"}>
          Inicio
        </UiText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconBtn, routeName != "Reserves" && styles.disabled]}
        onPress={() =>  navigation.navigate("Reserves")}
      >
        <View style={styles.containerIcon}>
          <Icon name="calendar" size={20} color="black" />
        </View>
        <UiText color={"white"} size={"small"} fontWeight={"light"}>
          Reservas
        </UiText>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.iconBtn, routeName != "Profile" && styles.disabled]}
        onPress={() => navigation.navigate("Profile")}
      >
        <View style={styles.containerIcon}>
          <Icon name="user" size={24} color="black" />
        </View>
        <UiText color={"white"} size={"small"} fontWeight={"light"}>
          Perfil
        </UiText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  iconBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 99,
    width: 38,
    aspectRatio: 1 / 1,
    padding: 4,
  },
  disabled: {
    opacity: 0.6,
  },
});

export default BottomNav;
