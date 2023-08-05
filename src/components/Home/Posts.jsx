import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PostCard from '../Posts/PostCard'
import { CommentProvider } from '../../Context/CommentsContext'
import Comments from '../Posts/Comments'

const Posts = () => {
    return (


        <View style={styles.wrapper}>
            {
                [...Array(15)].map((data, index) => (
                    <PostCard
                        key={index}
                    />
                ))
            }
        </View>
    )
}

export default Posts

const styles = StyleSheet.create({
    wrapper: {
        gap: 4
    }
})