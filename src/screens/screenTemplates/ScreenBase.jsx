import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export const ScreenBase = ({ children, complete,  full, dark }) => {
  return (
    <SafeAreaView className={`flex-1 ${Platform.OS === 'android' && 'pt-8 '}  ${dark ? "bg-black" : "bg-white"}`}>
      <StatusBar style={dark ? 'light' : 'dark'} />

      <View className={`flex-1 ${!full && 'px-10'} `}>{children}</View>
    </SafeAreaView>
  )
}

