import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UiText from '../components/common/UiText'

const HeaderLogo = () => {
  return (
    <View style={styles.container}>
        <UiText color={'white'} fontWeight={'bold'} size={'extrabig'}>Quick Services</UiText>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingVertical: 16,
    },
});

export default HeaderLogo