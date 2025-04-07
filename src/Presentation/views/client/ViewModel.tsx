import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const ClientViewModel = () => {
    const {removeUserSession} = useContext(UserContext)
  return {
    removeUserSession
  }
}

export default ClientViewModel