import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScreenHomeBase } from './screenTemplates/ScreenHomeBase'
import UiText from '../components/common/UiText'
import { services } from '../utilities/services'
import { Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import UiButton from '../components/common/UiButton'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Greeting = ({ name = 'Usuario' }) => {
  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <UiText color={'black'} size={'title'}>
        Hola
      </UiText>
      <UiText color={'black'} fontWeight={'bold'} size={'title'}>
        {name + '!👋'}
      </UiText>
    </View>
  )
}

const HomeScreen = () => {
  const navigate = useNavigation()
  const handleService = (service) => {
    navigate.navigate('MakeReserve', service)
  }
  return (
    <ScreenHomeBase dark>
      <View style={styles.container}>
        <View className="flex-row justify-between items-center">
          <Greeting name="DANIEL" />
          <TouchableOpacity className="bg-black p-2 rounded-full justify-center items-center">
            <Icon name="bell" size={24} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={{ gap: 4 }}>
          <UiText color={'black'} fontWeight={'semibold'} size={'title'}>
            Servicios
          </UiText>
          <UiText color={'black'} fontWeight={'light'}>
            Escoge y programa tu servicio aquí:
          </UiText>
        </View>
        <ScrollView style={{ maxHeight: '70%' }}>
          <View style={styles.containerServices}>
            {services.map((service, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.serviceItem}
                  onPress={() => handleService(service)}
                >
                  <Image
                    source={service.imgUrl}
                    style={styles.serviceImage}
                  ></Image>
                  <UiText fontWeight={'light'} size={'small'}>
                    {service.category}
                  </UiText>
                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>
        <UiButton
          rounded
          text="¿DESEAS OFRECER TUS SERVICIOS?"
          color={'gray'}
        />
      </View>
    </ScreenHomeBase>
  )
}
const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  containerServices: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  serviceItem: {
    width: '28%',
    borderRadius: 8,
    alignItems: 'center',
    gap: 2,
  },
  serviceImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1 / 1,
    borderRadius: 16,
  },
})

export default HomeScreen
