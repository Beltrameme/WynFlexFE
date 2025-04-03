import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, View, Text, TextInput, ToastAndroid, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/MainStackNavigator';
import { RoundedButton } from '../../components/RoundedButton';
import { StackScreenProps } from '@react-navigation/stack';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'>{};

export const HomeScreen = ({navigation, route}: Props) => {

    const { email, password, errorMessage, onChange, login, user } = useViewModel();

    useEffect(() => {
        if (errorMessage !== '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])

    return(
    <View style={{top:60}}>
        <Text >HOME</Text>
        <CustomTextInput 
                image={ require('../../../../assets/email.png') }
                placeholder='Correo electronico'
                keyboardType='email-address'
                property='email'
                onChangeText={ onChange }
                value={ email }
            />
        
            <CustomTextInput 
                image={ require('../../../../assets/password.png') }
                placeholder='Contraseña'
                keyboardType='default'
                property='password'
                onChangeText={ onChange }
                value={ password }
                secureTextEntry={ true }
            />
            <RoundedButton text='LOGIN' onPress={ () => login()} />
        <TouchableOpacity onPress={ () => navigation.navigate('RegisterScreen') }>
            <Text>Registrate</Text>
        </TouchableOpacity>
    </View>
    )
    
}



    