import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Input from '../../components/UI/Form/Input'
import UIButton from '../../components/UI/Form/UIButton'

const Login = () => {

    return (
        <View
            style={styles.formWrapper}
        >

            <View
                style={styles.inputsWrapper}
            >
                <Input
                    placeholder={"Email or username"}
                    onChangeText={(e) => { console.log(e) }}
                />
                <Input
                    placeholder={"Password"}

                />
            </View>

            <UIButton
                onPress={() => { console.log("test") }}
                as='text'
                position='right'
            >
                Forget Password?
            </UIButton>
            <UIButton
                onPress={() => { console.log("test") }}
                as='button'
                disabled={true}
            >
                Log In
            </UIButton>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <View
                    style={styles.line}
                ></View>
                <Text style={{
                    fontSize: 12,
                    fontWeight: 600,
                    opacity: 0.4
                }}>
                    OR
                </Text>
                <View
                    style={styles.line}
                ></View>
            </View>

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "baseline",
                    justifyContent: "center",
                    gap: 4
                }}
            >
                <Text
                    style={{
                        opacity: 0.4,
                        fontSize: 14
                    }}
                >
                    Don't have an account?
                </Text>
                <UIButton
                    as='text'
                >
                    Sign up
                </UIButton>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    formWrapper: {
        gap: 30
    },
    inputsWrapper: {
        width: "100%",
        gap: 12
    },
    line: {
        width: "35%",
        height: 1,
        backgroundColor: "black",
        opacity: 0.2

    }
})