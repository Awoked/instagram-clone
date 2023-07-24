import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Context/UserContext'

const useUser = () => {
    const { userData, setUserData } = useContext(UserContext);

    useEffect(() => {
        console.log(userData);
    }, [userData])

    const Login = async (data) => {
        // DB işlemi
        setUserData(data)
        if (false) {
            //Hata
            throw new Error("Login failed")
        }
    }

    return {
        userData,
        Login,
    }
}

export default useUser