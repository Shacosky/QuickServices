import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ScreenBase } from '../screenTemplates/ScreenBase'
import BackButton from '../../components/common/buttons/BackButton'
import { Checkbox, Switch } from 'react-native-paper'

export default function DeviceSettings() {
  const [isGeoLocationOn, setIsGeoLocationOn] = useState(false)
  const [isNotificationsOn, setIsNotificationsOn] = useState(false)

  const onToggleGeoLocation = () => setIsGeoLocationOn(!isGeoLocationOn)
  const onToggleNotifications = () => setIsNotificationsOn(!isNotificationsOn)

  return (
    <ScreenBase dark>
      <BackButton />
      <View className=" py-4 w-full">
        <Text className="text-4xl pl-8  font-semibold text-white">
          QuickServices
        </Text>
        <Text className="font-bold text-white  mt-6">
          {' '}
          Ajustes del dispositivo
        </Text>
        <View className="gap-4 my-4">
          <View className="flex-row justify-between my-2 items-center">
            <Text className="text-white">Geolocalización</Text>
            <Switch
              color="#333"
              value={isGeoLocationOn}
              onValueChange={onToggleGeoLocation}
              trackColor={{
                false: '#666', // color cuando está desactivado
                true: '#ccc',  // color cuando está activado
              }}
            />
          </View>
          <View className="flex-row justify-between my-2 items-center">
            <Text className="text-white">Notificaciones</Text>
            <Switch
              color="#333"
              value={isNotificationsOn}
              onValueChange={onToggleNotifications}
              trackColor={{
                false: '#666', // color cuando está desactivado
                true: '#ccc',  // color cuando está activado
              }}
            />
          </View>
        </View>
      </View>
    </ScreenBase>
  )
}
