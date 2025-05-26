import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
  onSelect: (userType: 'DRIVER' | 'SELLER') => void;
};

export const UserTypeSelectionScreen = ({ onSelect }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => onSelect('DRIVER')}
      >
        <Text style={styles.buttonText}>I'm a Driver</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.sellerButton]}
        onPress={() => onSelect('SELLER')}
      >
        <Text style={styles.buttonText}>I'm a Seller</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#4285F4',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  sellerButton: {
    backgroundColor: '#34A853',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
