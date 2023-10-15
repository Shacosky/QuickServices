import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import UiText from "./common/UiText";
import colors from "../assets/colors/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import Animated, {
  FadeInUp,
  FadeOutDown,
} from "react-native-reanimated";
import Rating from "../components/Rating";
import UiButton from "./common/UiButton";
import ProcessSteps from "./ProcessSteps";

const CleanerStats = () => {
  const [step, setStep] = useState("search");
  return (
    <Animated.View
      style={styles.container}
      exiting={FadeOutDown}
    >
      {step === "search" && <CleanerSearch step={step} setStep={setStep} />}
      {step === "isHere" && <CleanerIsHere step={step} setStep={setStep} />}
    </Animated.View>
  );
};

const CleanerSearch = ({ setStep }) => {
  return (
    <Animated.View entering={FadeInUp} exiting={FadeOutDown}>
      <UiText fontWeight={"bold"} size={"title"}>
        Buscando tu cleaner
      </UiText>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <ProcessSteps initialValue={4} />
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => setStep("isHere")}
        >
          <Icon name="arrow-right" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const CleanerIsHere = () => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const [evaluationProcessActive, setEvaluationProcessActive] = useState(false);
  return (
    <Animated.View
      style={{ gap: 16 }}
      entering={FadeInUp}
      exiting={FadeOutDown}
    >
      <Animated.View style={styles.cleanerProfile}>
        <View style={styles.profileImgContainer}></View>
        <View style={{ flex: 1, gap: 8 }}>
          <View style={styles.stats}>
            <TouchableOpacity
              style={{ maxWidth: "60%" }}
              onPress={() => setIsOpenDescription(!isOpenDescription)}
            >
              <UiText fontWeight={"bold"} size={"subtitle"}>
                Rodrigo Sepulveda
              </UiText>
              <UiText fontWeight={"light"} size={"small"}>
                Está en camino...
              </UiText>
            </TouchableOpacity>
            <Rating initialRating={2} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <UiText fontWeight={"light"} size={"small"}>
              Distancia:
            </UiText>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <UiText fontWeight={"bold"} style={{ color: "#147af5" }}>
                10min
              </UiText>
              <UiText fontWeight={"subtitle"}>(3.5km)</UiText>
            </View>
          </View>
        </View>
      </Animated.View>
      {isOpenDescription && (
        <Animated.View entering={FadeInUp}>
          <UiText fontWeight={"semibold"}>Servicios</UiText>
          <UiText fontWeight={"light"} size={"small"}>
            Limpieza de auto / limpieza de hogar / Jardinería
          </UiText>
          <UiText>
            Hola! Soy Rodrigo y he trabajado ,ás de 8 años ofreciendo mis
            servicios de limpieza, adquiriendo una gran experiencia en el rubro,
            por lo que espero poder entregarte toda la confianza y buenos
            resultados como persona y trabajador...
          </UiText>
        </Animated.View>
      )}
      {evaluationProcessActive && (
        <Animated.View entering={FadeInUp} style={{ gap: 8 }}>
          <UiText fontWeight={"semibold"}>
            Servicio de clenaer en proceso
          </UiText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <ProcessSteps initialValue={3} style={{ maxWidth: "70%" }} />
            <UiText fontWeight={"bold"} style={{ marginBottom: 8 }}>
              3.0 / 5
            </UiText>
          </View>
          <UiText fontWeight={"semibold"}>
            ¿Cómo evalúas el servicio de Rodrigo?
          </UiText>
          <Rating
            starsSize={24}
            initialRating={4}
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          />
          <TouchableOpacity
            style={{ alignSelf: "flex-end", marginVertical: 8 }}
          >
            <UiText fontWeight={"semibold"} size={"small"}>
              ¿Necesitas ayuda?
            </UiText>
          </TouchableOpacity>
        </Animated.View>
      )}
      <UiButton
        color={evaluationProcessActive ? "black" : "gray"}
        style={{ gap: 20 }}
        rounded
        text={"TU SERVICIO HA LLEGADO"}
        onPress={() => setEvaluationProcessActive(true)}
      >
        <Icon name="arrow-right" size={20} color="white" />
      </UiButton>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 24,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },

  nextButton: {
    borderRadius: 99,
    backgroundColor: colors.gray,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
  },
  // CleanerIsHere
  cleanerProfile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
    maxWidth: "100%",
  },
  profileImgContainer: {
    width: 50,
    height: 50,
    borderRadius: 99,
    backgroundColor: colors.gray,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
});
export default CleanerStats;
