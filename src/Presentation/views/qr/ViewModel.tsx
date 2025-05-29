import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'

const QrGeneratorViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        lat: 0.0,
        long: 0.0,
        street: '',
        address: '',
        neighbourhood: ''
    });
    
    useEffect(() => {
      const requestPermissions = async () => {
        const foreground = await Location
      }
    
      
    }, [])
    

    return {
        ...values,
    }
}

export default QrGeneratorViewModel;
