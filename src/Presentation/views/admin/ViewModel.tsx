import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const AdminViewModel = () => {
    const {removeUserSession} = useContext(UserContext)
  return {
    removeUserSession
  }
}

export default AdminViewModel