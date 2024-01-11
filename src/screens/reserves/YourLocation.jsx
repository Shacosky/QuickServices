import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScreenHomeBase } from '../screenTemplates/ScreenHomeBase'
import { ScreenBase } from '../screenTemplates/ScreenBase'
import BackButton from '../../components/common/buttons/BackButton'
import { UiIcon } from '../../components/common/UiIcon'
import { useNavigation } from '@react-navigation/native'

const Location = () => {
  const navigate = useNavigation()
  return (
    <TouchableOpacity className="w-full flex-row my-4 items-center" onPress={() => navigate.navigate("MakeReserve")}>
      <View className="mx-4">
        <UiIcon name="map-marker" color="white" size={24} />
      </View>
      <View className="gap-2">
        <Text className="text-lg text-white ">
          Los Oficios 1598
        </Text>
        <Text className=" text-white ">
          7510594, Providencia,puerto alto, reg...
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default function YourLocation() {
  return (
    <ScreenBase dark>
      <BackButton />
      <Text className="text-2xl font-extrabold text-white my-8">
        ¿Cuál es tu ubicación?
      </Text>
      <View className="flex-row w-full rounded-full bg-white  items-center">
        <View className="px-4">
          <UiIcon name="search" color="gray" size={24} />
        </View>
        <TextInput
          placeholderTextColor={'black'}
          placeholder="Buscar..."
          className=" h-12"
        />
      </View>
      <ScrollView className="flex-1">
        <Location />
        <Location />
        <Location />
        <Location />
      </ScrollView>
    </ScreenBase>
  )
}
