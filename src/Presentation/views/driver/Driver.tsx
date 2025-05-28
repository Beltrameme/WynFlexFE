import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useUserLocal } from '../../hooks/useUserLocal';
import useViewModel from './ViewModel';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigator/DriverStackNavigator';
interface Props extends StackScreenProps<RootStackParamList, 'DriverScreen'>{};
export const DriverScreen = ({navigation, route}: Props) => {
  const { user,removeUserSession } = useViewModel();
  useEffect(() => {
      if(user?.rol !== 'DRIVER'){
        navigation.replace('HomeScreen',{rol:user.rol})
      }
    }, [user])
  return (
    <View style={{top:60}}>
        <Text>driver</Text>
         <View style={{top:100}}>
          <TouchableOpacity onPress={ () =>  removeUserSession()}>
            <Text>remover sesion</Text>
          </TouchableOpacity>
        </View>
        <View style={{top:100}}>
          <TouchableOpacity onPress={ () => navigation.navigate('QrGeneratorScreen')}>
            <Text>qr</Text>
          </TouchableOpacity>
        </View>  
    </View>
  )
}
