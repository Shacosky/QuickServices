import { View, Text, StyleSheet } from "react-native";
import React from "react";
import UiText from "../components/common/UiText";
import { Image } from "react-native";

const HeaderLogo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require("../assets/brand/logo.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingVertical: 16,
  },
  containerLogo: {
   alignSelf:'center'
  },

  logo: {
    aspectRatio: 17/9,
    width:80,
    height:undefined
  },
});

export default HeaderLogo;
