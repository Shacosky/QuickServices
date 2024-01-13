import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const UiTextInput = ({ style, placeholderText, ...restOfProps }) => {
  const containerInputStyles = [
    styles.containerInput,
    style,
  ];

  return (
    <View style={containerInputStyles}>
      <Text style={styles.placeholderTextStyles}>{placeholderText}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={"gray"}
        placeholder=""
        {...restOfProps}
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
    borderRadius: 99,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 24,
    paddingTop:18,
    paddingBottom:10,
  },
  placeholderTextStyles: {
    color: "gray",
    position: "absolute",
    marginLeft: 24,
    marginVertical: 4,
    fontSize: 12,
  },
});

export default UiTextInput;
