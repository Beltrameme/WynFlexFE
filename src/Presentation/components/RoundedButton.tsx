import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import { MyColors } from '../theme/AppTheme'


interface Props {
    text: string,
    onPress: () => void,
    foto?: ImageSourcePropType
}

export const RoundedButton = ({ text, onPress, foto }: Props) => {
  return (
    <TouchableOpacity
        style={ styles.roundedButton }
        onPress={() => onPress()}
    >   
        <Image
        style={{height:45,width:45, right:50}}
        source={foto}
        />
        <Text style={ styles.textButton }>{ text }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    roundedButton: {
        width: '100%',
        height: 50,
        backgroundColor: MyColors.primary,
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    textButton: {
        color: 'white',
        // fontWeight: 'bold'
    }
});
