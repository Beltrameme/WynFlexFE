import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, View, Text, TextInput, ToastAndroid, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/MainStackNavigator';
import { RoundedButton } from '../../components/RoundedButton';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'>{};

export const HomeScreen = ({navigation, route}: Props) => {
    return(
    <View style={{top:60}}>
        <Text >HOME</Text>

        <TouchableOpacity onPress={ () => navigation.navigate('RegisterScreen') }>
            <Text>Registrate</Text>
        </TouchableOpacity>
    </View>
    )
    
}



    