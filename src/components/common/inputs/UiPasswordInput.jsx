import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function UiPasswordInput({ placeholderText, label, ...restOfProps }) {

    const [isVisible, setIsVisible] = useState(true)
  return (
    <View className="w-full rounded-full my-2 border flex-row justify-between items-center border-neutral-500 h-10  relative mt-6">
      <Text className="text-sm text-neutral-400 absolute top-0 h-10 left-0 ml-4 -translate-y-6">{label}</Text>
      <TextInput
      className="text-white flex-1 pl-4"
        {...restOfProps}
        placeholder={placeholderText}
        secureTextEntry={isVisible}
      />
      <TouchableOpacity className="px-4 h-full justify-center" onPressIn={()=>setIsVisible(false)} onPressOut={()=>setIsVisible(true)}>
        <Text className="text-neutral-400">Mostrar</Text>
      </TouchableOpacity>
    </View>
  )
}
