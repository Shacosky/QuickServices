import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import HeaderLogo from "../../components/HeaderLogo";
import BottomNav from "../../components/BottomNav";
import colors from "../../assets/colors/colors";

export const ScreenHomeBase = ({ children, complete, style }) => {
  const ScreenBaseStyle = [styles.container, style];
  return (
    <View style={ScreenBaseStyle}>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" && 40,
          marginBottom: complete ? 0 : 0,
          justifyContent: "space-between",
          flex: 1,
          paddingBottom: 0,
        }}
      >
        <HeaderLogo />
        <View style={styles.content}>{children}</View>
        <BottomNav />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 38,
    paddingVertical: 40,
    borderTopEndRadius: 48,
    borderTopStartRadius: 48,
  },
});
