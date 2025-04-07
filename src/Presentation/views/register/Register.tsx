import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, Text, ToastAndroid, View } from 'react-native'
import { CustomTextInput } from '../../components/CustomTextInput'
import useViewModel from './ViewModel';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigator/MainStackNavigator';
import { RoundedButton } from '../../components/RoundedButton';
import { Picker } from '@react-native-picker/picker';


interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'>{};

export const RegisterScreen = ({navigation, route}: Props) => {

  const { email, password, confirmPassword, rol, errorMessage, onChange, register, user, loading } = useViewModel();
  
  useEffect(() => {
    if (errorMessage != '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage])
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {      
          if (user?.id !== null && user?.id !== undefined) {
              navigation.replace('HomeScreen');
          }
      }, [user])

  return (
    <View >
          

        <View >

          <ScrollView>

            <Text >REGISTRARSE</Text>
            
            
            <CustomTextInput 
              placeholder='Correo electronico'
              keyboardType='email-address'
              image={ require('../../../../assets/email.png') }
              property='email'
              onChangeText={ onChange }
              value={ email }
              />

            
            
            <CustomTextInput 
              placeholder='Contraseña'
              keyboardType='default'
              image={ require('../../../../assets/password.png') }
              property='password'
              onChangeText={ onChange }
              value={ password }
              secureTextEntry={ true }
              />
            
            <CustomTextInput 
              placeholder='Confirmar Contraseña'
              keyboardType='default'
              image={ require('../../../../assets/confirm_password.png') }
              property='confirmPassword'
              onChangeText={ onChange }
              value={ confirmPassword }
              secureTextEntry={ true }
              />


              <Picker
                selectedValue={rol}
                onValueChange={(itemValue) => onChange('rol', itemValue)}
                dropdownIconColor='gray'
                mode='dropdown'
              >
                <Picker.Item label="SELECCIONE" value="" />
                <Picker.Item label="CLIENTE" value="CLIENTE" />
                <Picker.Item label="DRIVER" value="DRIVER" />
                <Picker.Item label="ADMIN" value="ADMIN" />
              </Picker>


            <View style={{ marginTop: 30 }}>
                
                <RoundedButton text='CONFIRMAR' onPress={ () => register()} />

            </View>

          </ScrollView>

        </View>
        {
          loading &&
          <ActivityIndicator style={{position: 'absolute',top: 0,bottom: 0,left: 0,right: 0}} size="large" color='#F4991A' />
        }
        
    </View>
  )
}
