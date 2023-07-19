import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Login from './Login'
import Logo from '../../components/UI/Logo'
import Register from './Register'

const Auth = () => {
    return (
        <View
            style={styles.wrapper}
        >
            <View
                style={styles.container}
            >
                <Logo
                    width={182}
                    height={49}
                />
                {/* <Login /> */}
                <Register />
            </View>
        </View>
    )
}

export default Auth

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    container: {
        paddingHorizontal: 16,
        alignItems: "center",
        rowGap: 40
    }
})