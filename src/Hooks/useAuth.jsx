import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Context/UserContext'

/**
 * @typedef {{
 * userName: string,
 * password: string,
 * firstName: string,
 * lastName: string,
 * email: string,
 * password: string;
 * }} userType
 */

const useUser = () => {
    
    const { userData, setUserData } = useContext(UserContext);

    useEffect(() => {
        console.log(userData);
    }, [userData])



    const Login = async (data) => {
        // api işlemi
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