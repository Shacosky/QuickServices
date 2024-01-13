import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScreenHomeBase } from '../screenTemplates/ScreenHomeBase'
import UiText from '../../components/common/UiText'
import UiButton from '../../components/common/UiButton'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ScrollView } from 'react-native-gesture-handler'

const dataArray = [
  {
    location: 'Ubicación 1',
    address: 'Dirección 1',
    date: 'Fecha 1',
    cost: 'Costo 1',
    status: 'completado',
  },
  {
    location: 'Ubicación 2',
    address: 'Dirección 2',
    date: 'Fecha 2',
    cost: 'Costo 2',
    status: 'proceso',
  },
  {
    location: 'Ubicación 3',
    address: 'Dirección 3',
    date: 'Fecha 3',
    cost: 'Costo 3',
    status: 'busqueda',
  },
  {
    location: 'Ubicación 3',
    address: 'Dirección 3',
    date: 'Fecha 3',
    cost: 'Costo 3',
    status: 'busqueda',
  },
  {
    location: 'Ubicación 3',
    address: 'Dirección 3',
    date: 'Fecha 3',
    cost: 'Costo 3',
    status: 'busqueda',
  },
  {
    location: 'Ubicación 3',
    address: 'Dirección 3',
    date: 'Fecha 3',
    cost: 'Costo 3',
    status: 'busqueda',
  },
  {
    location: 'Ubicación 3',
    address: 'Dirección 3',
    date: 'Fecha 3',
    cost: 'Costo 3',
    status: 'busqueda',
  },
  {
    location: 'Ubicación 3',
    address: 'Dirección 3',
    date: 'Fecha 3',
    cost: 'Costo 3',
    status: 'busqueda',
  },
]

const getStatusIcon = (reserve) => {
  const statusMap = {
    completado: { icon: 'repeat', text: 'Repetir ' },
    proceso: { icon: 'repeat', text: 'Aceptada' },
    busqueda: { icon: 'search', text: 'En búsquedas' },
  }

  const status = statusMap[reserve.status] || {
    icon: 'search',
    text: 'En búsqueda',
  }
  return (
    <View className="w-full items-center justify-center p-2 flex-row">
      {reserve.status === 'completado' && (
        <>
          <Icon name={status.icon} size={16} color="white" />
          <Text className="ml-2 text-white text-sm">{status.text}</Text>
        </>
      )}
      {reserve.status === 'proceso' && (
        <>
          <Icon name={status.icon} size={16} color="white" />
          <Text className="ml-2 text-white text-sm">{status.text}</Text>
        </>
      )}
      {reserve.status === 'busqueda' && (
        <>
          <Icon name={status.icon} size={16} color="white" />
          <Text className="ml-2 text-white text-sm">{status.text}</Text>
        </>
      )}
    </View>
  )
}

const ReserveBlock = ({ reserve }) => {
  const navigation = useNavigation()

  return (
    <View className={`w-full flex-row items-center mt-2 -z-1 my-2 `}>
      <View className="w-1/12">
        <Icon name="map-marker" size={24} color={'black'} />
      </View>
      <View className="w-6/12 ">
        <Text className=" font-semibold">{reserve.location}</Text>
        <Text className="text-xs">{reserve.address}</Text>
        <Text className="text-xs">{reserve.date}</Text>
        <Text className="text-xs">{reserve.cost}</Text>
      </View>
      <View className="w-5/12 rounded items-center justify-center">
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              reserve.status === 'completado'
                ? 'MakeReserve'
                : reserve.status === 'en busqueda'
                ? ''
                : 'RequestDetailsQuick',
            )
          }
          className={`rounded-full w-full ${
            reserve.status === 'proceso' && ' bg-red-500 '
          } ${reserve.status == 'busqueda' && 'bg-neutral-600 '} ${
            reserve.status === 'completado' && 'bg-black'
          }`}
        >
          {getStatusIcon(reserve)}
        </TouchableOpacity>
      </View>
    </View>
  )
}

const ReservesScreen = () => {
  const navigation = useNavigation()
  return (
    <ScreenHomeBase>
      <View style={styles.container}>
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-extrabold">Mis reservas</Text>
          <TouchableOpacity className="bg-black p-2 relative rounded-full justify-center items-center">
            <Icon name="bell" size={24} color={'white'} />
            <View className="absolute h-6 w-6 top-0 right-0 bg-red-500 border -translate-y-2 rounded-full translate-x-2 border-white items-center justify-center">
              <Text className="text-white">1</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <UiText>Todavía no tienes ninguna reserva.</UiText>
          <UiText>¿Qué estás esperando para comenzar?</UiText>
        </View>
        <UiButton
          rounded
          text={'RESERVA AQUÍ'}
          style={{ width: '85%', alignSelf: 'center' }}
          onPress={() => navigation.navigate('MakeReserve')}
        />
        <View className="flex-1  " style={{ gap: 8 }}>
          <UiText size={'small'}>Revisa tus reservas</UiText>
          <ScrollView className="">
            {dataArray.map((item, index) => (
              <ReserveBlock key={index} reserve={item} />
            ))}
          </ScrollView>
        </View>
      </View>
    </ScreenHomeBase>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
})

export default ReservesScreen
