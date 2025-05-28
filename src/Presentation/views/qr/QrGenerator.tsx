import React from 'react'
import { Text, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

export const QrGeneratorScreen = () => {
  const qr = {
    lat:1.11111,
    long: 12.341234,
    adress: 'santa rosa',
    number: 2483
  }
  return (
    <View style={{top:100}}>
        <QRCode
        value={JSON.stringify(qr)}
        size={200}
        color='black'
        backgroundColor='white'

        />
    </View>
  )
}
