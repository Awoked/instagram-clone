import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import Header from '../../components/Home/Header';
import Stories from '../../components/Home/Stories';
import Posts from '../../components/Home/Posts';
import { CommentProvider } from '../../Context/CommentsContext';
import Comments from '../../components/Posts/Comments';

const Home = () => {


    return (
        <SafeAreaView style={{ backgroundColor: "#fff" }}>
            <CommentProvider>
                <ScrollView>
                    <Header />
                    <Stories />
                    <Posts />
                </ScrollView>
                <Comments />
            </CommentProvider>
        </SafeAreaView>
    )
}

export default Home