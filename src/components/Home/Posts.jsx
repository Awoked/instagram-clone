import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PostCard from '../Posts/PostCard'

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