import { StatusBar } from 'expo-status-bar';
import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

//Components

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { UserProvider } from './src/Context/UserContext';
import { HomeIcon, HomeIconFilled, PlusSquare, ReelsTv, ReelsTvFilled, SearchIcon, SearchIconFilled } from './src/components/UI/Icons';

import ProfilePicture from './src/components/UI/ProfilePicture';

//Screens
import Register from './src/screens/auth/Register';
import Login from './src/screens/auth/Login';
import Home from './src/screens/Home/Home';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile/Profile';
import Reels from './src/screens/Reels';

const Tab = createBottomTabNavigator();


// Ana uygulama tabları
function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    paddingBottom: Platform.OS !== "android" ? 20 : 10,
                    alignItems: "center",
                    justifyContent: "center",
                },
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        focused ? <HomeIconFilled /> : <HomeIcon />
                    )
                }}
            />
            <Tab.Screen
                name='Search'
                component={Search}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        focused ? <SearchIconFilled /> : <SearchIcon />
                    )
                }}
            />
            <Tab.Screen
                name='Post'
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <PlusSquare />
                    )
                }}
            />
            <Tab.Screen
                name='Reels'
                component={Reels}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        focused ? <ReelsTvFilled /> : <ReelsTv />
                    )
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <ProfilePicture
                            source={{
                                uri: "https://picsum.photos/200"
                            }}
                            size={32}
                        />
                    )
                }}
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
