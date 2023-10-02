import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export const ScreenBase = ({ children, complete, style, full, dark}) => {
  const ScreenBaseStyle = [styles.container, style];
  return (
    <View style={ScreenBaseStyle}>
      <StatusBar style={dark?"light":"dark"} />
      <View
        style={[
          {
            paddingTop: Platform.OS === "android" && 40,
            marginBottom: complete ? 0 : 0,
            paddingHorizontal: 28,
          },
          full && {paddingHorizontal: 0, paddingTop: 0, marginBottom: 0},
        ]}
      >
        {children}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
