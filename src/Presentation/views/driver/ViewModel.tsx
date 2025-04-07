import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const DriverViewModel = () => {
    const {removeUserSession} = useContext(UserContext)
  return {
    removeUserSession
  }
}

export default DriverViewModel