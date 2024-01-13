import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { ScreenHomeBase } from '../screenTemplates/ScreenHomeBase'
import UiText from '../../components/common/UiText'

const optionsJson = [
  { name: 'Mis datos', iconName: 'user', page:"MyData" },
  { name: 'Ajustes del dispositivo', iconName: 'cog', page:"DeviceSettings" },
  { name: 'Ubicaciones preferidas', iconName: 'map-marker', page:"PreferredLocations" },
  // { name: 'Cambiar contraseña', iconName: 'lock', page:"" },
  // { name: 'Lista de amigos', iconName: 'users', page:"mydata" },
  { name: 'Mis tarjetas', iconName: 'credit-card', page:"MyCards" },
  { name: 'Mis cupones', iconName: 'ticket', page:"MyCoupons" },
]

const ProfileScreen = () => {
  const navigation = useNavigation()

  const handleLogout = () => {
    navigation.navigate('Login')
  }

  return (
    <ScreenHomeBase>
      <View style={styles.container}>
        <UiText size={'title'} fontWeight={'bold'}>
          Mi cuenta
        </UiText>
        <TouchableOpacity style={styles.containerProfile}>
          <View style={styles.containerPicture}>
            <View style={[styles.icon, styles.profileIcon]}>
              <Icon name="camera" size={10} color="white" />
            </View>
          </View>
          <UiText fontWeight={'semibold'} size={'subtitle'}>
            Daniel Perez
          </UiText>
        </TouchableOpacity>
        <View style={styles.containerOptions}>
          {optionsJson.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.option} onPress={() => {item?.page && navigation.navigate(item?.page)}}>
                <View style={styles.icon}>
                  <Icon name={item.iconName} size={20} color="black" />
                </View>
                <View>
                  <UiText fontWeight={'semiBold'} size={'small'}>
                    {item.name}
                  </UiText>
                </View>
              </TouchableOpacity>
            )
          })}
          <TouchableOpacity  style={styles.option} onPress={handleLogout}>
                <View style={styles.icon}>
                  <Icon name={"sign-out"} size={20} color="black" />
                </View>
                <View>
                  <UiText fontWeight={'semiBold'} size={'small'}>
                    Cerrar sesión
                  </UiText>
                </View>
              </TouchableOpacity>
          <TouchableOpacity style={[styles.option, { marginTop: 16 }]}>
            <View style={styles.icon}>
              <Icon name={'user-times'} size={20} color="red" />
            </View>
            <View>
              <UiText
                fontWeight={'semiBold'}
                style={{ color: 'red' }}
                size={'small'}
              >
                Dar de baja mi cuenta
              </UiText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenHomeBase>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  containerOptions: {
    gap: 12,
  },
  option: { flexDirection: 'row', height: 30, gap: 16, alignItems: 'center' },
  icon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPicture: {
    width: 60,
    height: 60,
    borderRadius: 99,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  profileIcon: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    borderRadius: 99,
  },
  containerProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
})

export default ProfileScreen
