import { View, Text } from 'react-native'
import React from 'react'
import { ScreenBase } from '../screenTemplates/ScreenBase'
import BackButton from '../../components/common/buttons/BackButton'

export default function MyCoupons() {
  return (
    <ScreenBase dark>
      <BackButton />
      <View className=" py-4 w-full">
        <Text className="text-4xl pl-8  font-semibold text-white">
          QuickServices
        </Text>
  
      </View>
    </ScreenBase>
  )
}
