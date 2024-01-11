import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const Calendar = () => {
  const dias = Array.from({ length: 30 }, (_, index) => index + 1)

  const navigate = useNavigation()
  return (
    <View className="w-full rounded-2xl border border-gray">
          <Text className="text-white pt-4 pl-4">Selecciona la fecha</Text>
      <View className="flex-row justify-between p-4">
        <View>
          <Text className="text-white text-2xl">Vie,Oct27</Text>
        </View>
        <TouchableOpacity className="w-1/2 flex-row p-1 px-4  items-center justify-center rounded-full bg-neutral-900">
          <Text className="text-md text-white">10:00: - 11:10</Text>
          <View className="ml-4 ">
            <Icon name="angle-up" size={14} color={'white'} />
            <Icon name="angle-down" size={14} color={'white'} />
          </View>
        </TouchableOpacity>
      </View>
      <View className="w-full h-[1] bg-gray"></View>
      <View className="p-4 gap-4">
        <View className="flex-row justify-between">
          <Text className="text-white">Lun.</Text>
          <Text className="text-white">Mar.</Text>
          <Text className="text-white">Mie.</Text>
          <Text className="text-white">Jue.</Text>
          <Text className="text-white">Vie.</Text>
          <Text className="text-white">Sab.</Text>
          <Text className="text-white">Dom.</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-white font-bold text-xl">Octubre 2023</Text>
          <View className="flex-row gap-8">
            <TouchableOpacity>
              <Icon name="caret-left" size={32} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="caret-right" size={32} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="">
          <View className="  flex-row w-full flex-wrap">
            {dias.map((dia) => (
              <TouchableOpacity key={dia} className={`w-[10%] mx-[2%] my-1 items-center justify-center py-3 border border-transparent rounded ${dia == 23 && "border-white"} ${dia == 27 && "bg-white"}`}>
              <Text className={`text-white ${dia == 27 && "text-black"}`}>{dia}</Text>
            </TouchableOpacity>
            
            ))}
          </View>
        </View>
      </View>
    </View>
  )
}

export default Calendar
