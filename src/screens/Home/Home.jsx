import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Header from '../../components/Home/Header';
import Stories from '../../components/Home/Stories';
import Posts from '../../components/Home/Posts';
import Comments from '../../components/Posts/Comments';
import { CommentProvider } from '../../Context/CommentsContext';

const Home = () => {


    return (
        <SafeAreaView style={{ backgroundColor: "#fff" }}>
            <CommentProvider>
                <ScrollView showsVerticalScrollIndicator={false}>
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