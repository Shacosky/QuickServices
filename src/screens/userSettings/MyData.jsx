import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScreenBase } from '../screenTemplates/ScreenBase'
import BackButton from '../../components/common/buttons/BackButton'
import UiTextInput from '../../components/common/inputs/UiTextInput'
import UiPasswordInput from '../../components/common/inputs/UiPasswordInput'
import UiTextInputV2 from '../../components/common/inputs/UiTextInputV2'
import { UiPhoneInput } from '../../components/common/inputs/UiPhoneInput'
import { UiIcon } from '../../components/common/UiIcon'

export default function MyData() {
  return (
    <ScreenBase dark>
      <BackButton />
      <View className=" py-4 w-full">
        <Text className="text-4xl pl-8  font-semibold text-white">
          QuickServices
        </Text>
        <Text className="font-bold text-white my-2">
          Mi cuenta / Mis datos{' '}
        </Text>
        <UiTextInputV2 label="Nombre *" placeholderText="Ingrese su nombre" />
        <UiTextInputV2
          label="Apellido *"
          placeholderText="Ingrese su apellido"
        />
        <UiTextInputV2
          label="Correo electrónico *"
          placeholderText="Ingrese su correo electrónico"
        />
        <UiPasswordInput
          label="Contraseña *"
          placeholderText="Ingrese su contraseña"
        />
        <UiTextInputV2 label="Sexo *" placeholderText="Seleccione un sexo" />
      </View>
      <UiPhoneInput
        label="Teléfono *"
        placeholderText="Ingrese su número de teléfono"
      />
      <View className="ml-4">
        <Text className=" text-xs mt-4 mb-2 text-neutral-400">
          Fecha de nacimiento
        </Text>
        <TouchableOpacity className=" relative mb-2  flex-row   ">
          <Text className=" text-white">30 / 04 / 1995</Text>
          <View className="ml-4 ">
            <UiIcon name="angle-up" size={10} color={'white'} />
            <UiIcon name="angle-down" size={10} color={'white'} />
          </View>
        </TouchableOpacity>
      </View>
      <UiTextInputV2 label="País" placeholderText="Selecciona una opción" />
      <UiTextInputV2 label="Región " placeholderText="Selecciona una opción" />
    </ScreenBase>
  )
}
