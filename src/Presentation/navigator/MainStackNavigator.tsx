import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { HomeScreen } from '../views/home/Home';
import { RegisterScreen } from '../views/register/Register';
import { UserProvider } from '../context/UserContext';
import { DriverScreen } from '../views/driver/Driver';
import { ClientScreen } from '../views/client/Client';
import { AdminScreen } from '../views/admin/Admin';
import { ErrorScreen } from '../views/home/Error';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    HomeScreen: undefined,
    RegisterScreen: undefined, 
    DriverScreen: undefined,
    ClientScreen: undefined,
    AdminScreen: undefined,
    ErrorScreen: undefined,
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
         <Stack.Screen
         name="DriverScreen"
         component={DriverScreen}
         />
         <Stack.Screen
         name="ClientScreen"
         component={ClientScreen}
         />
         <Stack.Screen
         name="AdminScreen"
         component={AdminScreen}
         />
         <Stack.Screen
         name="ErrorScreen"
         component={ErrorScreen}
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