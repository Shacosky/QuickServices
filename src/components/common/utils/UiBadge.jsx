import { View, Text } from 'react-native'
import React from 'react'

export default function UiBadge({customClass, text}) {
  return (
    <View className={`py-1 px-2 bg-neutral-800 rounded ${customClass}`}>
        <Text className="text-white text-sm">{text}</Text>
    </View>
  )
}