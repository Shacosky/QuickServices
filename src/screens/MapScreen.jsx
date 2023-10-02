import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import customMap from "../utilities/customMap.json";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { ScreenBase } from "./screenTemplates/ScreenBase";
import UiText from "../components/common/UiText";

const MapScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenBase full style={{ backgroundColor: "black" }} dark>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name={"angle-left"} size={20} color="black" />
        </TouchableOpacity>
        <MapView
          loadingEnabled={true}
          style={styles.map}
          showsBuildings={false}
          initialRegion={{
            latitude: -33.4489,
            longitude: -70.6693,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
            maxZoomLevel: 20,
          }}
          customMapStyle={customMap}
        />
      </View>
      <View style={styles.containerService}>
        <UiText fontWeight={"bold"} size={"title"}>
          Buscando tu cleaner
        </UiText>
      </View>
      
    </ScreenBase>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    height: "100%",
  },
  map: {
    flex: 1,
  },
  backButton: {
    padding: 4,
    backgroundColor: "white",
    borderRadius: 99,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 58,
    marginLeft: 24,
    position: "absolute",
    zIndex: 99,
  },
  containerService: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 24,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
});

export default MapScreen;
