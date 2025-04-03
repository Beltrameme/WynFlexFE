import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { HomeScreen } from '../views/home/Home';
import { RegisterScreen } from '../views/register/Register';
import { UserProvider } from '../context/UserContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    HomeScreen: undefined,
    RegisterScreen: undefined, 
}

export const MainStackNavigator = () => {
  return (
    <UserState>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
         <Stack.Screen 
         name="RegisterScreen" 
         component={RegisterScreen}
         options={{
          headerShown: true,
          title: 'Nuevo Usuario'
         }} 
         />
    </Stack.Navigator>
    </UserState>
  )
}

const UserState = ({children}: any) => {
  return(
    <UserProvider>
      { children }
    </UserProvider>
  )
}