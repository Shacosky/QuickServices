import React from 'react'
import { Modal, View, Text, TouchableOpacity } from 'react-native'
import UiText from '../common/UiText'
import UiButton from '../common/UiButton'
import { useNavigation } from '@react-navigation/native'

const CloseAccount = ({ isOpen, setIsOpen }) => {
  const navigation = useNavigation()

  return (
    <Modal visible={isOpen} transparent={true} animationType="fade">
      <View
        className="flex-1 pt-10  items-center "
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      >
        <View className="p-8 m-8   rounded-2xl border bg-black">
          <Text className="font-bold text-center text-white text-xl">
            FELICIDADES!
          </Text>
          <Text className="text-center text-white">
            Estás seguro de que quieres dar de baja tu cuenta? Después que
            processemos tu solicitud, se eliminarán tus datos, se perderá toda
            la informacio´n y membresías. Si necesitas ayuda con tus datos, por
            faovor dirígete contacto_qs@gmail.com, ¿Quieres continuar?
          </Text>
          <View className="flex-row justify-around mt-4">
            <TouchableOpacity
              className="px-8 py-2 bg-white rounded-full items-center justify-center"
              onPress={() => navigation.navigate('Login')}
            >
              <Text className="">SI</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="px-8 py-2 bg-red-500 rounded-full items-center justify-center"
              onPress={() => setIsOpen(false)}
            >
              <Text className="">NO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default CloseAccount
