import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

const UiText = ({
  children,
  color,
  size,
  fontWeight,
  style,
  ...restOfProps
}) => {
  const textStyles = [
    styles.text,
    color === "primary" && { color: colors.primary },
    color === "white" && { color: colors.white },
    color === "black" && { color: colors.black },
    color === "gray" && { color: colors.gray },
    size === "small" && styles.small,
    size === "title" && styles.title,
    size === "subtitle" && styles.subtitle,
    size === "extraLarge" && styles.extraLarge,
    fontWeight === "bold" && styles.bold,
    fontWeight === "semibold" && styles.semiBold,
    fontWeight === "light" && styles.light,
    style,
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.textDefault,
    fontSize: 16,
    fontWeight: 300,

  },
  bold: {
    fontWeight: "bold",
  },

  semiBold: { fontWeight: 500 },
  small: {
    fontSize: 14,
  },
  light: {
    fontWeight: 300,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 20,
  },
  extraLarge: {
    fontSize: 32,
  },
  gray:{
    color: colors.gray,
  }
});

export default UiText;
