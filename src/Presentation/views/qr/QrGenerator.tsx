import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../components/CustomTextInput'
import { RoundedButton } from '../../components/RoundedButton'
import MapView from 'react-native-maps'

export const QrGeneratorScreen = () => {
  // const { email, password, confirmPassword, errorMessage, onChange, register, user, loading } = useViewModel();
  
  // useEffect(() => {
  //   if (errorMessage != '') {
  //     ToastAndroid.show(errorMessage, ToastAndroid.LONG);
  //   }
  // }, [errorMessage])
  // const [modalVisible, setModalVisible] = useState(false);
      
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});