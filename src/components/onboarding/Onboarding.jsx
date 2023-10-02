import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import UiText from "../common/UiText";
import UiButton from "../common/UiButton";
import { useNavigation } from "@react-navigation/native";
import { services } from "../../utilities/services"; 

const Onboarding = () => {
  const [selectedService, setSelectedService] = useState(0); 
  const navigation = useNavigation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedService((prevSelected) =>
        prevSelected === services.length - 1 ? 0 : prevSelected + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ gap: 16, width: "100%", alignItems: "center" }}>
        <UiText size={"extraLarge"}>QuickServices</UiText>
        <UiButton
          style={{ width: "100%" }}
          rounded
          text="Iniciar sesión para comenzar"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      <View style={styles.containerService}>
        <View style={styles.content}>
          <UiText size={"small"}>Servicios</UiText>
          <UiText size={"subtitle"} fontWeight={"bold"}>
            {services[selectedService].service}
          </UiText>
        </View>
        <View style={styles.carousel}>
          <View style={styles.containerImage}>
            <Image
              source={services[selectedService].imgUrl}
              style={styles.image}
            ></Image>
          </View>
          <View style={styles.pointContainer}>
            {services.map((service, index) => (
              <View
                key={index}
                style={[
                  styles.point,
                  index === selectedService && {
                    backgroundColor: "black",
                    paddingHorizontal: 12,
                  },
                ]}
              />
            ))}
          </View>
        </View>
        <View style={styles.content}>
          <UiText size={"subtitle"} fontWeight={"bold"}>
            ¡Hola Somos QuickServices!
          </UiText>
          <UiText style={{ minHeight: 7 }}>
            Queremos ayudar facilitando tu vida y tiempo, brindando la
            oportunidad de ofrecer (cleaner) y contratar tus servicios básicos
            de limpieza al alcance de tu hogar de manera rápida optimizada y a
            bajo costo
          </UiText>
        </View>
      </View>
      <UiButton
        style={{ width: "100%" }}
        rounded
        text="PROGRAMA TU SERVICIO AQUÍ"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  containerService: {
    gap: 8,
    height: "60%",
  },
  content: {
    gap: 4,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 16,
  },
  containerImage: {
    flex: 1,
    height: "auto",
    elevation: 1,
    borderRadius: 16,
  },
  carousel: {
    gap: 8,
    flex: 1,
    marginBottom: 16,
  },
  point: {
    width: 10,
    height: 10,
    borderRadius: 99,
    backgroundColor: "#d8d8d8",
  },
  pointContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
});

export default Onboarding;
