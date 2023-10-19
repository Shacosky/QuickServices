import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import UiText from "./common/UiText";

const Rating = ({ initialRating,style,starsSize = 12}) => {
  const [rating, setRating] = useState(initialRating || 0);

  return (
    <View style={[{flexDirection:'row', gap:4}, style]}>
      <UiText fontWeight={"semibold" } size="small">4.5</UiText>

      <View style={styles.container}>
        {[1, 2, 3, 4, 5].map((index) => (
          <Icon
            key={index}
            name={index <= rating ? "star" : "star-o"}
            size={starsSize}
            style={styles.icon}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap:2
  },
  icon: {
    color: "black",
  },
  ratingText: {
    marginLeft: 10,
    fontSize: 20,
  },
});

export default Rating;
