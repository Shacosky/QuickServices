import { StyleSheet } from "react-native";
import appStyles from "./AppStyles";

const loginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loginContainer: {
    alignItems: "center",
    paddingTop: 50,
  },
  rectangulo74: {
    backgroundColor: "black",
    width: 413,
    height: 874,
    opacity: 0.2,
    position: "absolute",
    zIndex: -1,
  },
  loginText: {
    marginBottom: 20,
  },
  primeraVezText: {
    opacity: 0.8,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Avenir",
    marginBottom: 50,
  },
  ingresarButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 22,
    width: 264,
    height: 44,
    marginBottom: 20,
  },
  ingresarButtonText: {
    fontSize: 17,
    fontWeight: "500",
    fontFamily: "Avenir",
    color: "#000",
  },
  quickservicesText: {
    fontSize: 45,
    fontWeight: "500",
    fontFamily: "Avenir",
    marginBottom: 30,
  },
  emailInputContainer: {
    width: 337,
    height: 44,
    marginBottom: 20,
  },
  emailInput: {
    flex: 1,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 22,
    fontSize: 11,
    fontWeight: "200",
    fontFamily: "Avenir",
    color: "#fff",
    paddingLeft: 20,
  },
  olvideContrasenaText: {
    fontSize: 11,
    fontWeight: "200",
    fontFamily: "Avenir",
    color: "#fff",
    marginBottom: 20,
  },
  passwordInputContainer: {
    width: 337,
    height: 44,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 22,
    fontSize: 11,
    fontWeight: "200",
    fontFamily: "Avenir",
    color: "#fff",
    paddingLeft: 20,
  },
  registrarseContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  registrarseText: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Avenir",
    color: "#fff",
    marginRight: 10,
  },
  linea2: {
    width: 153,
    height: 1,
    backgroundColor: "#fff",
  },
  logoContainer: {
    width: 22.85,
    height: 22.85,
    marginBottom: 50,
  },
  logo: {
    width: 22.85,
    height: 22.85,
  },
});

export default loginScreenStyles;
