import { StyleSheet } from 'react-native';

const colors = {
  negro: '#000000',
  blanco: '#FFFFFF',
  gris: '#DADADA'
}

const fonts = {
  regular: 'Roboto-Regular',
  bold: 'Roboto-Bold',
  italic: 'Roboto-Italic',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: '#007aff',
  },
  button: {
    backgroundColor: colors.gris, // Naranja
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: colors.negro,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  } 
});

export default styles;
