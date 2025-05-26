import React, { useEffect, useState } from 'react'
import { User } from '../../Domain/entities/User';
import { GetUserLocalUseCase } from '../../Domain/useCases/userLocal/GetUserLocal';
import { RemoveUserLocalUseCase } from '../../Domain/useCases/userLocal/RemoveUserLocal';

export const useUserLocal = () => {

  const [user, setUser] = useState<User>()

  useEffect(() => {
      getUserSession();
  }, [])

  const getUserSession = async() =>  {
      const user = await GetUserLocalUseCase();
      setUser(user);
  }

  const removeUserSession = async () => {
    RemoveUserLocalUseCase();
  }

  return { 
    user,
    getUserSession ,
    removeUserSession
  }

}
