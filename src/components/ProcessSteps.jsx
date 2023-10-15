import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

const ProcessSteps = ({ initialValue, style }) => {
    const [countProcess, setCountProcess] = useState(initialValue || 0);
  
    const dots = [];
    for (let i = 0; i < 5; i++) {
      dots.push(
        <View
          key={i}
          style={[
            styles.dot,
            i < countProcess ? styles.activeDot : null,
          ]}
        ></View>
      );
    }
  
    return <View style={[styles.containerDots,style]}>{dots}</View>;
  };

const styles = StyleSheet.create({
  containerDots: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  dot: {
    flex: 1,
    height: 12,
    borderRadius: 99,
    backgroundColor: "#dfdfdf",
  },
  activeDot: {
    backgroundColor: "#000",
  },
});

export default ProcessSteps;
