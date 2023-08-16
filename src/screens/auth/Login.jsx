import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Input from '../../components/UI/Form/Input'
import UIButton from '../../components/UI/Form/UIButton'
import AuthContainer from '../../components/Auth/AuthContainer'
import useAuth from '../../Hooks/useAuth'

const Login = ({ navigation }) => {
    const { Login } = useAuth();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [loginActive, setLoginActive] = useState(true);


    const loginHandler = async () => {
        try {
            const response = await Login({ userName, password });
            const data = response.json();
            console.log(data);
            await navigation.navigate("HomeTabs")

        } catch (error) {
            console.log(error.name)
        }
    }

    useEffect(() => {
        if (userName.length > 3 && password.length > 3) {
            setLoginActive(false);
        } else {
            setLoginActive(true);
        }
    }, [userName, password])

    return (
        <>
            <AuthContainer>
                <View
                    style={styles.formWrapper}
                >
                    <View
                        style={styles.inputsWrapper}
                    >
                        <Input
                            placeholder={"Email or username"}
                            onChangeText={(e) => { setUserName(e) }}
                        />
                        <Input
                            placeholder={"Password"}
                            onChangeText={(e) => { setPassword(e) }}
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
                        onPress={() => { loginHandler() }}
                        as='button'
                        disabled={loginActive}
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
                            onPress={() => { navigation.navigate("Register") }}
                        >
                            Sign up
                        </UIButton>
                    </View>
                </View>
            </AuthContainer>
        </>
    )
}

export default Login

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