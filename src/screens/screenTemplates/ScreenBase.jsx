import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export const ScreenBase = ({ children, complete, style }) => {
  const ScreenBaseStyle = [styles.container, style];
  return (
    <View style={ScreenBaseStyle}>
      <StatusBar style="auto" />
      <View
        style={{
          paddingTop: Platform.OS === "android" && 40,
          marginBottom: complete ? 0 : 0,
          paddingHorizontal: 24,
        }}
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
