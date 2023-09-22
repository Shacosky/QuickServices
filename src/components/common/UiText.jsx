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
    size === "small" && styles.small,
    size === "title" && styles.title,
    size === "subtitle" && styles.subtitle,
    size === "extraLarge" && styles.extraLarge,
    fontWeight === "bold" && styles.bold,
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
  },
  bold: {
    fontWeight: "bold",
  },
  small: {
    fontSize: 14,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 18,
  },
  extraLarge: {
    fontSize: 32,
  },
});

export default UiText;
