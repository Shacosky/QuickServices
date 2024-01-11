import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import { ScreenBase } from '../screenTemplates/ScreenBase'
import BackButton from '../../components/common/buttons/BackButton'
import { Checkbox } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

export default function ServiceDetails() {
  const [home, setHome] = useState(false)
  const [departament, setDepartament] = useState(false)

  const navigate = useNavigation().navigate
  return (
    <ScreenBase dark>
      <BackButton />
      <Text className="text-2xl font-bold text-white my-4">
        Detalles del servicio
      </Text>
      <View className="gap-4">
        <Text className="text-white text-lg">¿Dónde vives?</Text>
        <View className="flex-row gap-2">
          <Checkbox status={home ? 'checked' : 'unchecked'} color="white" />
          <Text className="text-white">Casa</Text>
        </View>
        <View className="flex-row gap-2">
          <Checkbox
            status={departament ? 'checked' : 'unchecked'}
            color="white"
          />
          <Text className="text-white ">Departamento</Text>
        </View>
        <Text className="text-white  text-lg">
          Describe la cantidad de espacio y su m2{' '}
        </Text>
        <View className="relative w-100">
          <TextInput
            className="w-full h-12 text-white"
            placeholder="ingresa tu respuesta"
            placeholderTextColor={'gray'}
          />
          <View className="h-[1] bg-gray w-full"></View>
        </View>
      </View>
      <TouchableOpacity
        className="bg-white my-12 h-12 w-full rounded-full items-center justify-center"
        onPress={() => navigate(' PaymentReserve')}
      >
        <Text className="text-black text-lg uppercase font-semibold">
          Continuar
        </Text>
      </TouchableOpacity>
    </ScreenBase>
  )
}
