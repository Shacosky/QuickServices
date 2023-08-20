import { StyleSheet } from "react-native";

// crear constante de colores negro, gris y blanco

const colors = {
  negro: '#000000',
  blanco: '#ffffff',
  gris: '#808080'
}


//color rojo


const styles = StyleSheet.create({
  mainView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.negro
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    width: "100%",
    backgroundColor: colors.gris,
    borderRadius: 35,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  inputContainer: {
    width: "70%",
    marginBottom: 20,
  },
  buttonStyle: {
    width: "100%",
    backgroundColor: "#007bff",
    borderRadius: 35,
    padding: 10,
    alignItems: "center",
  },
  buttonStyleText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpText: {
    marginTop: 20,
    color: colors.blanco,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: colors.blanco,
    borderWidth: 1,
    borderRadius: 35,
    paddingHorizontal: 10,
    marginBottom: 10,
    placeholderTextColor: colors.blanco

  },
  registerButton: {
    width: "100%",
    backgroundColor: "#007bff",
    borderRadius: 35,
    padding: 10,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
