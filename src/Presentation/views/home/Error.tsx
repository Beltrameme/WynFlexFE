import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useUserLocal } from '../../hooks/useUserLocal';
import useViewModel from './ViewModel';


export const ErrorScreen = () => {
    const { removeUserSession } = useViewModel();
  return (
    <View style={{top:60}}>
        <Text>Error</Text>
        <View style={{top:100}}>
          <TouchableOpacity onPress={ () =>  removeUserSession()}>
            <Text>remover sesion</Text>
          </TouchableOpacity>
        </View> 
    </View>
  )
}
