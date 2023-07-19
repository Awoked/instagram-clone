import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

//Components
import Auth from './src/screens/auth';

export default function App() {
    return (
        <>
            <SafeAreaView>
                <Auth />
                <StatusBar
                    style={Platform.OS === "ios" ? "dark" : 'light'}
                    translucent={Platform.OS === "ios" ? true : false}
                />
            </SafeAreaView>
        </>
    );
}
