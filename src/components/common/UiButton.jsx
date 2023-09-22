import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../assets/colors/colors";

const UiButton = ({
  text,
  style,
  onPress,
  primary,
  secondary,
  color,
  rounded,
  ...restOfProps
}) => {
  const textStyles = [
    { color: "white", fontWeight: "600" },
    color === "white" && { color: "black" },
    color === "black" && { color: "white" },
  ];
  const buttonStyles = [
    styles.baseBtn,
    rounded && { borderRadius: 99 },
    primary && styles.primary,
    secondary && styles.secondary,
    color === "white" && styles.white,
    color === "black" && styles.black,
    style,
  ];
  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress} {...restOfProps}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 1,
    backgroundColor: "black",
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  white: {
    backgroundColor: "white",
    color: "black",
  },
  black: {
    backgroundColor: "black",
    color: "white",
  },
  disabledBtn: {
    opacity: 0.4,
  },
});

export default UiButton;
