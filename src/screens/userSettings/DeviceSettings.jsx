import { View, Text } from 'react-native'
import React from 'react'
import { ScreenBase } from '../screenTemplates/ScreenBase'
import BackButton from '../../components/common/buttons/BackButton'

export default function DeviceSettings() {
  return (
    <ScreenBase dark>
        <BackButton/>
        <View className="mt-8">
            
        </View>

    </ScreenBase>
  )
}