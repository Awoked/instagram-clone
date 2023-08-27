import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

//Components
import Input from '../../components/UI/Form/Input'
import UIButton from '../../components/UI/Form/UIButton'
import AuthContainer from '../../components/Auth/AuthContainer'

import useAuth from '../../Hooks/useAuth'


const Register = ({ navigation }) => {

    const { Register } = useAuth();

    const [credentials, setCredentials] = useState({
        email: '',
        fullName: '',
        userName: '',
        password: '',
        passwordRepeat: ''
    });
    const [buttonActive, setButtonActive] = useState(true);

    const handleChange = (text, name) => {
        console.log(name)
        setCredentials(prev => ({
            ...prev,
            [name]: text
        }))
    }

    const handleRegister = async() => {
        if (credentials.password !== credentials.passwordRepeat) return false;

        const { email, fullName, password, userName } = credentials;
        const firstName = fullName.substring(0, fullName.indexOf(' '));
        const lastName = fullName.substring(fullName.indexOf(' ') + 1);
        await Register({
            email,
            userName,
            firstName,
            lastName,
            password,
        })

    }

    useEffect(() => {

        if (
            credentials.email.length > 3 &&
            credentials.fullName.length > 3 &&
            credentials.userName.length > 3 &&
            credentials.password.length > 3 &&
            credentials.passwordRepeat.length > 3
        ) {
            setButtonActive(false);
        } else {
            setButtonActive(true)
        }

    }, [credentials])

    return (
        <AuthContainer>
            <View
                style={styles.formWrapper}
            >

                <View
                    style={styles.inputsWrapper}
                >
                    <Input
                        placeholder={"Email"}
                        onChangeText={e => handleChange(e, "email")}
                    />
                    <Input
                        placeholder={"Full Name"}
                        onChangeText={e => handleChange(e, "fullName")}
                    />
                    <Input
                        placeholder={"Username"}
                        onChangeText={e => handleChange(e, "userName")}
                    />
                    <Input
                        placeholder={"Password"}
                        onChangeText={e => handleChange(e, "password")}
                    />
                    <Input
                        placeholder={"Repeat Password"}
                        onChangeText={e => handleChange(e, "passwordRepeat")}
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
                    onPress={handleRegister}
                    as='button'
                    disabled={buttonActive}
                >
                    Sign Up
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
                        Have an account?
                    </Text>
                    <UIButton
                        as='text'
                        onPress={() => { navigation.navigate("Login") }}

                    >
                        Sign in
                    </UIButton>
                </View>
            </View>
        </AuthContainer>
    )
}

export default Register

const styles = StyleSheet.create({
    formWrapper: {
        gap: 30,
        width: "100%"
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