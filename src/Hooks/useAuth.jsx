import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Context/UserContext'
import env from '../config/env';

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

const useAuth = () => {
    const { userData, setUserData } = useContext(UserContext);

    useEffect(() => {
        console.log(userData);
    }, [userData])


    const Login = async (userData) => {
        // api işlemi

        if (false) {
            //Hata
            throw new Error("Login failed")
        }
    }

    // api/register
    // {
    //     "userName*": "XRuinCrash",
    //     "firstName*": "abdullah",
    //     "lastName*": "tonka",
    //     "email*": "abdullahtonka3427@gmail.com",
    //     "password*": "$2a$10$emhiyJxW9qaK56d.Rt2GduJRchKuOdDxPpB/qoNkzjZXIvK6kQNne",
    //     "birthDay": "2023-07-26T00:00:00",
    //     "lastSeen": "2023-07-26T00:00:00",
    //     "isVerified": true,
    //     "hiddenProfile": true,
    //     "bio": "bedel ödendi nigaa",
    //     "avatar": "/src/img/Avatars/XRuinCrash.png"
    //   }

    /**
     * 
     * @param {userType} userData 
     */
    const Register = async (userData) => {
        const response = await fetch(`${env.API_BASE_URL}/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        console.log(response.status)
        if (response.status === 200) {
            console.log("success")
            const data = await response.json();
            console.log(data);
            // setUserData(userData)
        } else if (response.status === 500) {
            console.log("kullanıcı zaten kayıtlı")
        }
    }

    return {
        userData,
        Login,
        Register
    }
}

export default useAuth