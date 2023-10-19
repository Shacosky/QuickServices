import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import UiText from "../UiText";

const UiPhoneInput = ({ style, placeholderText, ...restOfProps }) => {
  const containerInputStyles = [styles.containerInput, style];

  return (
    <View style={containerInputStyles}>
      <TouchableOpacity style={styles.flagContainer}>
        <UiText color="white">🇨🇱</UiText>
        <UiText color="white">+56</UiText>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholderTextColor={"gray"}
        placeholder={placeholderText}
        {...restOfProps}
        keyboardType="phone-pad"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    width: "100%",
    color: "white",
  },
  containerInput: {
    flexDirection: "row",
    borderRadius: 99,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 14,
    gap: 16,
  },
  placeholderText: {
    color: "gray",
    position: "absolute",
    marginHorizontal: 24,
    marginVertical: 4,
    fontSize: 12,
  },
  flagContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});

export default UiPhoneInput;
