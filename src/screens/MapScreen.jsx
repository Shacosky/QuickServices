import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";
import MapView from "react-native-maps";
import customMap from "../utilities/customMap.json";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { ScreenBase } from "./screenTemplates/ScreenBase";
import CleanerStats from "../components/CleanerStats";
import {PROVIDER_GOOGLE} from 'react-native-maps'

const MapScreen = () => {
  const navigation = useNavigation();
  const [selectMap, setSelectMap] = useState(false);
  return (
    <ScreenBase full style={{ backgroundColor: "black" }} dark>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name={"angle-left"} size={20} color="black" />
      </TouchableOpacity>
      <TouchableHighlight
        style={styles.container}
        onPressIn={() => setSelectMap(true)}
      >
        <MapView
        provider={PROVIDER_GOOGLE}
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
      </TouchableHighlight>

      {selectMap ? (
        <TouchableOpacity
          style={styles.togleButton}
          onPress={() => setSelectMap(!selectMap)}
        >
          <Icon name="arrow-down" size={16} color="gray" />
        </TouchableOpacity>
      ) : (
        <CleanerStats />
      )}
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
  togleButton: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    padding: 12,
    paddingHorizontal: 36,
    borderRadius: 99,
    marginBottom: 40,
  },
});

export default MapScreen;
