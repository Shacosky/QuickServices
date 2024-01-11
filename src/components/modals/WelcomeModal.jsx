import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import UiText from "../common/UiText";
import UiButton from "../common/UiButton";
import { useNavigation } from "@react-navigation/native";

const WelcomeModal = ({isOpen, setIsOpen}) => {
  const navigation = useNavigation();
  return (
    <Modal visible={isOpen} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <Text className="font-bold text-center text-xl">FELICIDADES!</Text>
          <Text className="text-center">

            Ya eres parte de nuestra comunidad en QuickServices, esperamos que
            disfrutes la experiencia.
          </Text>
          <UiButton
            color={"black"}
            text={"CONTINUAR"}
            rounded
            onPress={() => {
              navigation.navigate("Home"), setIsOpen(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 52,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 24,
    gap: 16,
  },
});

export default WelcomeModal;
