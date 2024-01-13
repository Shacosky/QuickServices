import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ScreenBase } from '../screenTemplates/ScreenBase'
import BackButton from '../../components/common/buttons/BackButton'
import { UiIcon } from '../../components/common/UiIcon'
import UiBadge from '../../components/common/utils/UiBadge'
import { UiDivider } from '../../components/common/utils/UiDivider'
import UiButton from '../../components/common/UiButton'
import { useNavigation } from '@react-navigation/native'
import SearchCleaner from '../../components/modals/SearchCleaner'
import UiText from '../../components/common/UiText'

export default function RequestDetailsQuick() {
  const [isOpen, setIsOpen] = useState(false)
  const navigation = useNavigation()

  return (
    <ScreenBase dark>
      <BackButton />
      <ScrollView className="">
        <UiText
          size={'extraLarge'}
          color={'white'}
          style={{ textAlign: 'center', marginTop: 10, marginBottom: 40 }}
        >
          QuickServices
        </UiText>
        <Text className="font-bold text-2xl mb-4 text-white">
          Detalle de solicitud
        </Text>
        <View className="w-full flex-row items-center">
          <View className="">
            <Text className="text-white">PERSONA</Text>
          </View>
          <View className="w-1/2 px-3">
            <Text className="text-white uppercase">Cleaner</Text>
            <Text className="text-white text-bold">Rodrigo sepúlveda</Text>
            <Text className="text-white text-xs text-bold">
              Santiago, Chile
            </Text>
          </View>
          <View className=" flex-row item-center">
            <Text className="text-white mr-2">4.0</Text>
            <View className="flex-row itemx-center justify-center">
              <UiIcon name="star" size={20} color="white" />
              <UiIcon name="star" size={20} color="white" />
              <UiIcon name="star" size={20} color="white" />
              <UiIcon name="star" size={20} color="white" />
            </View>
          </View>
        </View>
        <View className=" justify-between items-center flex-row py-4">
          <View className="flex-row items-center">
            <UiIcon name="star" size={20} color="white" />
            <Text className="text-white ml-2"> Servicio</Text>
          </View>
          <UiBadge text="Limpieza" color="white" />
        </View>
        <UiDivider />

        <View>
          <View className=" justify-between items-center flex-row py-2">
            <View className="flex-row items-center">
              <UiIcon name="clock-o" size={20} color="white" />
              <Text className="text-white ml-2"> 10:00 - 11:00</Text>
            </View>
            <UiBadge text="Limpieza" color="white" />
          </View>
          <View className=" justify-between items-center flex-row py-2">
            <View className="flex-row items-center">
              <Text className="text-white ml-6"> Recordatorio</Text>
            </View>
            <UiBadge text="09:50" color="white" />
          </View>
          <View className=" justify-between items-center flex-row py-2">
            <View className="flex-row items-center">
              <Text className="text-white ml-6"> Recordatorio de tipo</Text>
            </View>
            <UiBadge text="Notificación" color="white" />
          </View>
        </View>
        <UiDivider />
        <View className=" justify-between items-center flex-row py-2">
          <View className="flex-row items-center">
            <UiIcon name="map-marker" size={20} color="white" />
            <Text className="text-white ml-2"> Ubicación</Text>
          </View>
        </View>
        <View className="rounded bg-neutral-800 py-2 px-6">
          <Text className="text-white">Los Oficios 1598</Text>
          <Text className="text-gray text-xs">
            08165043 Cordillera, Puente Alto, reg..
          </Text>
        </View>
        <UiDivider />
        <View className=" justify-between items-center flex-row py-2">
          <View className="flex-row items-center">
            <UiIcon name="map-marker" size={20} color="white" />
            <Text className="text-white ml-2"> Detalles de servicio</Text>
          </View>
        </View>
        <View className="flex-row flex-wrap w-full ">
          <UiBadge text="Casa" color="white" customClass="m-1" />
          <UiBadge text="2 habitaciones" color="white" customClass="m-1" />
          <UiBadge text="280x279cmxHab" color="white" customClass="m-1" />
          <UiBadge text="Limpieza completa" color="white" customClass="m-1" />
        </View>
        <UiDivider />
        <View className=" justify-between items-center flex-row py-2">
          <View className="flex-row items-center">
            <UiIcon name="dollar" size={20} color="white" />
            <Text className="text-white ml-2"> Valor / Costo</Text>
          </View>
          <UiBadge text="$40.000" color="white" />
        </View>

        <UiButton
          text="CONTINUAR"
          color="white"
          style={{ marginTop: 28 }}
          rounded
          onPress={() => navigation.navigate('Reserves')}
        />
        <View className="h-12"></View>
      </ScrollView>
    </ScreenBase>
  )
}
