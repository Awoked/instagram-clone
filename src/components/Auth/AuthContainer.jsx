import React from 'react'
import { StyleSheet, View } from 'react-native'
import Logo from '../UI/Logo'


const AuthContainer = ({ children }) => {
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
                {children}
            </View>
        </View>
    )
}

export default AuthContainer

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