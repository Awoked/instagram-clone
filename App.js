import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

//Components

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import { UserProvider } from './src/Context/UserContext';
import Home from './src/screens/Home/Home';

const Tab = createBottomTabNavigator();


// Ana uygulama tabları
function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    paddingBottom: Platform.OS === "android" ? 20 : 0,
                    alignItems: "center",
                    justifyContent: "center"
                }
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
            />
        </Tab.Navigator>
    )
}

export default function App() {


    return (
        <>
            <UserProvider>

                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen
                            name='Login'
                            component={Login}
                            options={{
                                headerShown: false,
                                tabBarStyle: {
                                    display: "none"
                                }
                            }}
                        />
                        <Tab.Screen
                            name='Register'
                            component={Register}
                            options={{
                                headerShown: false,
                                tabBarStyle: {
                                    display: "none"
                                }
                            }}
                        />
                        <Tab.Screen
                            name="HomeTabs"
                            component={HomeTabs}
                            options={{
                                headerShown: false,
                                tabBarStyle: {
                                    display: "none"
                                }
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </UserProvider>
            <StatusBar
                style={Platform.OS === "ios" ? "dark" : 'light'}
                translucent={Platform.OS === "ios" ? true : false}
            />
        </>
    );
}
