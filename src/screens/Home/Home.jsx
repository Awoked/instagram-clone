import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import useUser from '../../customHooks/useAuth'

const Home = () => {

    const {userData} = useUser();
    return (
        <SafeAreaView>
            <Text>
                {userData.userName}
            </Text>
        </SafeAreaView>
    )
}

export default Home