import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { ScreenBase } from '../screenTemplates/ScreenBase'
import BackButton from '../../components/common/buttons/BackButton'
import { UiIcon } from '../../components/common/UiIcon'
import { useNavigation } from '@react-navigation/native'

const Location = ({ name, address, onDelete }) => {
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
        <UiIcon name="map-marker" color="white" size={24} />
      </View>
      <View style={{ flex: 1, marginLeft: 8 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>
          {name}
        </Text>
        <View style={{ marginTop: 4, marginBottom: 2 }}>
          <Text style={{ fontWeight: '300', fontSize: 14, color: 'white' }}>
            {address}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={onDelete} style={{ marginRight: 8 }}>
        <UiIcon name="close" color="gray" size={18} />
      </TouchableOpacity>
    </View>
  )
}

export default function PreferredLocations() {
  const [locations, setLocations] = useState([
    {
      id: 1,
      name: 'Abuela',
      address: 'Los Oficios 1598, 7510594, Providencia, Puerto Alto, Reg...',
    },
    { id: 2, name: 'Mamá', address: 'Dirección de mamá' },
    { id: 3, name: 'Papá', address: 'Dirección de papá' },
  ])

  const navigate = useNavigation()

  const handleDeleteLocation = (locationId) => {
    const updatedLocations = locations.filter((loc) => loc.id !== locationId)
    setLocations(updatedLocations)
  }

  const [isOpenCreate, setIsOpenCreate] = useState(false)

  return (
    <ScreenBase dark>
      <BackButton />
      <Text className="text-4xl pl-8  font-semibold text-white">
        QuickServices
      </Text>
      <Text className="font-bold mt-6 text-white">Ubicaciones preferidas</Text>
      <View style={{ marginTop: 10, gap: 8 }}>
        {locations.map((location) => (
          <Location
            key={location.id}
            name={location.name}
            address={location.address}
            onDelete={() => handleDeleteLocation(location.id)}
          />
        ))}
      </View>
      <TouchableOpacity onPress={() =>setIsOpenCreate(true)} className=" ml-2 my-4 flex-row items-center">
        <UiIcon name="plus" color="gray" size={14} />
        <Text className="text-white  ml-2">Agregar ubicación</Text>
      </TouchableOpacity>

      {isOpenCreate ? (
        <>
          <View className="gap-6">
            <View className="relative ">
              <TextInput
                placeholder="Escribe el nombre de ubicación / contacto"
                className="py-4"
                placeholderTextColor={'gray'}
              ></TextInput>
              <View className="w-full h-[1] bg-gray absolute bottom-0"></View>
            </View>
            <View className="flex-row  rounded-full bg-white  items-center">
              <View className="px-4">
                <UiIcon name="search" color="gray" size={24} />
              </View>
              <TextInput
                placeholderTextColor={'black'}
                placeholder="Buscar dirección"
                className=" h-12"
              />
            </View>
          </View>
          <View className="flex-row absolute bottom-0 right-0 m-12 justify-end gap-2">
            <TouchableOpacity onPress={() =>setIsOpenCreate(false)}>
              <Text className="text-white text-lg ">Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-white text-lg ">OK</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : null}
    </ScreenBase>
  )
}
