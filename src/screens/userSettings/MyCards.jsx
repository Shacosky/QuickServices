import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScreenBase } from '../screenTemplates/ScreenBase'
import BackButton from '../../components/common/buttons/BackButton'
import { UiIcon } from '../../components/common/UiIcon'
import UiTextInputV2 from '../../components/common/inputs/UiTextInputV2'
import UiTextInput from '../../components/common/inputs/UiTextInput'

const CreditCard = ({ name, address, onDelete, caduca }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 8,
      }}
    >
      <View style={{ marginLeft: 8 }}>
        <UiIcon name="credit-card-alt" color="white" size={24} />
      </View>
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>
          {name}
        </Text>
        <View style={{ marginTop: 4, marginBottom: 2 }}>
          <Text style={{ fontWeight: '300', fontSize: 14, color: 'white' }}>
            {address}
          </Text>
          <Text style={{ fontWeight: '300', fontSize: 14, color: 'white' }}>
            {caduca}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={onDelete} style={{ marginRight: 8 }}>
        <UiIcon name="close" color="gray" size={18} />
      </TouchableOpacity>
    </View>
  )
}

export default function MyCards() {
  const [isOpenCreate, setIsOpenCreate] = useState(false)
  return (
    <ScreenBase dark>
      <BackButton />
      <View className="mt-8">
        <CreditCard
          name={'MasterCard'}
          address={'que termina en ****77442'}
          caduca="08/30"
        />
      </View>
      <TouchableOpacity
        onPress={() => setIsOpenCreate(true)}
        className=" ml-2 my-2 py-2 flex-row items-center"
      >
        <UiIcon name="plus" color="gray" size={14} />
        <Text className="text-white  ml-2">Agregar nueva tarjeta</Text>
      </TouchableOpacity>
      

      {isOpenCreate === true && (
        <>
        <View className="flex-row gap-4 mb-3">
        <View>
          <UiIcon name="cc-visa" color="white" size={30} />
        </View>
        <View>
          <UiIcon name="cc-mastercard" color="white" size={30} />
        </View>
      </View>
          {/* Create credit card */}
          <View className="border justify-center border-white rounded-full px-4 py-3  items-center">
            <View className="flex-row gap-2 items-center ">
              <View>
                <UiIcon name="credit-card" color="white" size={14} />
              </View>
              <Text className="text-white">Crédito / Débito </Text>
            </View>
          </View>

          {/* input spacess */}
          <View className="my-4">
            <View className="flex-row gap-2 justify-between my-1">
              <View className="flex-1 justify-center items-center rounded-full border py-2 px-4 border-neutral-500">
                <Text className="text-neutral-400">Numero de tarjeta</Text>
              </View>
              <View className="flex- justify-center items-center rounded-full border py-2 px-4 border-neutral-500">
                <Text className="text-neutral-400">mm/aa</Text>
              </View>
              <View className="flex- justify-center items-center rounded-full border py-2 px-4 border-neutral-500">
                <Text className="text-neutral-400">CVV</Text>
              </View>
            </View>
            {/* ----- */}
            <View className="flex-row gap-2 justify-between my-1">
              <UiTextInput
                style={{ flex: 1 }}
                placeholderText={'Nombre'}
              ></UiTextInput>
              <UiTextInput
                style={{ flex: 1 }}
                placeholderText={'Apellido'}
              ></UiTextInput>
            </View>
            {/* ----- */}

            <View className="flex-row gap-2 justify-between my-1">
              <UiTextInput
                style={{ flex: 1 }}
                placeholderText={'Dirección de facturación'}
              ></UiTextInput>
            </View>
            {/* ----- */}
            <View className="flex-row gap-2 justify-between my-1">
              <UiTextInput
                style={{ flex: 1 }}
                placeholderText={'Ciudad'}
              ></UiTextInput>
              <UiTextInput
                style={{ flex: 1 }}
                placeholderText={'Estado/provincia'}
              ></UiTextInput>
            </View>
            {/* ----- */}

            <View className="flex-row gap-2 justify-between my-1">
              <UiTextInput
                style={{ flex: 1 }}
                placeholderText={'Código postal'}
              ></UiTextInput>
              <UiTextInput
                style={{ flex: 1 }}
                placeholderText={'País/Región'}
              ></UiTextInput>
            </View>
            {/* ----- */}

            <View className="flex-row gap-2 justify-between my-1">
              <UiTextInput
                style={{ flex: 1 }}
                placeholderText={'RUT / RUN'}
              ></UiTextInput>
            </View>
            <View className="flex-row gap-2 justify-between my-1">
              <UiTextInput
                style={{ flex: 1 }}
                placeholderText={'Número de teléfono (Opcional)'}
              ></UiTextInput>
            </View>
          </View>

          <View className="flex-row absolute bottom-0 right-0 m-12 justify-end gap-2">
            <TouchableOpacity onPress={() => setIsOpenCreate(false)}>
              <Text className="text-white text-lg ">Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-white text-lg ">OK</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScreenBase>
  )
}
