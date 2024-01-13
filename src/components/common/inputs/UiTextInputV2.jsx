import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function UiTextInputV2({
  placeholderText,
  label,
  ...restOfProps
}) {
  return (
    <View className="w-full rounded-full my-2 border flex-row justify-between items-center border-neutral-500 h-10  relative mt-6">
      <Text className="text-sm text-neutral-400 absolute top-0 h-10 left-0 ml-4 -translate-y-6">
        {label}
      </Text>
      <TextInput
        className="text-white flex-1 pl-4 "
        {...restOfProps}
        placeholder={placeholderText}
      />
    </View>
  )
}
