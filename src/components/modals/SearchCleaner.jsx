import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import UiText from "../common/UiText";
import UiButton from "../common/UiButton";
import { useNavigation } from "@react-navigation/native";

const SearchCleaner = ({isOpen, setIsOpen}) => {
  const navigation = useNavigation();
  return (
    <Modal visible={isOpen} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
         <View>
         <Text className="font-bold text-center text-xl uppercase max-w-xs ">Ahora estamosr</Text>
          <Text className="font-bold text-center text-xl uppercase max-w-xs "> buscando a tu cleaner</Text>
         </View>
          <Text className="text-center">
            Te enviaremos una notificacióin de confirmación.
          </Text>
          <UiButton
            color={"black"}
            text={"CONTINUAR"}
            rounded
            onPress={() => {
              navigation.navigate("Reserves"), setIsOpen(false);
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

export default SearchCleaner;
