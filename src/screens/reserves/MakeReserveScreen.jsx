import React, { useState } from "react";
import { ScreenBase } from "../screenTemplates/ScreenBase";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import UiText from "../../components/common/UiText";
import { services } from "../../utilities/services";
import Icon from "react-native-vector-icons/FontAwesome";

const Location = ({...restOfProps}) => {
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 4 }} {...restOfProps}>
      <View style={{ justifyContent: "center", alignItems: "center",   width:40}}>
        <Icon name={"map-marker"} size={24} color="white" />
      </View>
      <View>
        <UiText size="small" color="white" style={{ opacity: 1 }}>
          Los Oficios 1598
        </UiText>
        <UiText size="small" style={{ opacity: 0.6 }} color="white">
          7510594, Providencia
        </UiText>
      </View>
    </TouchableOpacity>
  );
};

const MakeReserveScreen = () => {
  const [selectService, setSelectService] = useState(0);
  const navigation = useNavigation();

  const goToPreviousService = () => {
    setSelectService((prevService) =>
      prevService === 0 ? services.length - 1 : prevService - 1
    );
  };

  const goToNextService = () => {
    setSelectService((prevService) =>
      prevService === services.length - 1 ? 0 : prevService + 1
    );
  };

  return (
    <ScreenBase style={{ backgroundColor: "#111" }}>
      <View style={{ gap: 24 }}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name={"angle-left"} size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View>
        <UiText size="small" color={"white"}>
          * Servicio
        </UiText>
        <View style={styles.containerSelect}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={goToPreviousService}
          >
            <Icon name={"angle-left"} size={24} color="white" />
          </TouchableOpacity>
          <UiText size="small" color={"white"}>
            {services[selectService].category}
          </UiText>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={goToNextService}
          >
            <Icon name={"angle-right"} size={24} color="white" />
          </TouchableOpacity>
        </View>
        </View>
        <UiText size="title" color="white">
          {" "}
          ¿Cuál es tu ubicación?
        </UiText>
        <View style={styles.containerInput}>
          <Icon
            name={"search"}
            size={16}
            color="black"
            style={{ paddingLeft: 8 }}
          />
          <TextInput
            placeholder="Escribe tu ubicación"
            placeholderTextColor="black"
            style={{ color: "white" }}
          />
        </View>
        <Location onPress={() => navigation.navigate("PaymentReserve")}/>
        <Location />
        <Location />
        <Location />
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
  containerSelect: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 16,
    width: "70%",
    borderRadius: 99,
    borderWidth: 1,
    borderColor: "white",
  },
  iconContainer: {
    width: 40,
    height: "100%",
    alignItems: "center",
    padding: 8,
  },
  containerInput: {
    padding: 8,
    backgroundColor: "white",
    borderRadius: 99,
    gap: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    height: "100%",
    color: "black",
  },
});

export default MakeReserveScreen;
