import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import useUser from '../../customHooks/useAuth'
import Header from '../../components/Home/Header';
import Stories from '../../components/Home/Stories';
import Posts from '../../components/Home/Posts';

const Home = () => {

    const { userData } = useUser();

    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                <Stories />
                <Posts />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home