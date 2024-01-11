import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { UiIcon } from '../UiIcon'

export default function BackButton() {
  const navigation = useNavigation()
  return (
    <View className="w-full pt-4 items-start">
      <TouchableOpacity
        className="bg-white h-8 w-8 rounded-full items-center justify-center aspect-square"
        onPress={() => navigation.goBack()}
      >
        <UiIcon name="angle-left" size={18} color={'#000'} />
      </TouchableOpacity>
    </View>
  )
}
