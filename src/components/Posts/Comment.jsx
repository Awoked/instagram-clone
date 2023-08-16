import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useComment from '../../Hooks/useComment';
import ProfilePicture from '../UI/ProfilePicture';
import { Heart } from '../UI/Icons';

const Comment = ({ userData, comment }) => {


    return (
        <View style={styles.wrapper}>
            <ProfilePicture />
            <View style={{ flex: 1, rowGap: 2 }}>
                <Text onPress={() => { console.log("Go To profile") }} style={[styles.fs14, styles.bold]}>
                    {userData?.userName}&nbsp;
                </Text>
                <Text style={styles.commentText}>
                    {comment}
                </Text>
            </View>
            <View>
                <Heart />
                <Text>
                    120
                </Text>
            </View>
        </View>
    )
}

export default Comment

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 20,
    },
    fs14: {
        fontSize: 14,
    },
    bold: {
        fontWeight: 700
    },
    commentText: {
    }
})