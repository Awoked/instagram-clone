import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import ProfilePicture from "../UI/ProfilePicture";
import { Text } from 'react-native';
import { IconPlusBlue } from '../UI/Icons';

const Stories = () => {
    return (
        <ScrollView
            style={styles.container}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.wrapper}>
                {
                    [...Array(30)].map((data, index) => (
                        <View
                            key={index}
                            style={styles.profileWrapper}
                        >
                            <View
                                style={[
                                    styles.profilePictureWrapper,
                                    index === 0 ?
                                        styles.currentUser
                                        :
                                        index === 3 ?
                                            styles.friendStory
                                            :
                                            styles.newStory
                                ]}
                            >
                                <ProfilePicture
                                    source={{
                                        uri: `https://picsum.photos/id/${Math.floor(Math.random() * 150) + 200}/400`
                                    }}
                                    size={60}
                                    styles={[styles.profilePicture]}
                                />
                                {index === 0 && <IconPlusBlue style={styles.addStoryIcon} />}
                            </View>
                            <Text style={styles.userName}>
                                User
                            </Text>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    )
}

export default Stories;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderBottomWidth: 2,
        borderColor: "rgba(0, 0, 0, 0.10)"
    },
    wrapper: {
        flexDirection: "row",
        gap: 12,
    },
    profileWrapper: {
        alignItems: "center",
        gap: 5,
    },
    userName: {
        fontSize: 12,
        color: "#000",
        // fontWeight: 400
    },
    profilePictureWrapper: {
        position: 'relative',
        padding: 3,
        borderWidth: 2,
        borderRadius: 9999
    },
    newStory: {
        borderColor: "#F9373F",
    },
    currentUser: {
        borderWidth: 0,
        borderColor: "transparent",
        padding: 5
    },
    friendStory: {
        borderColor: "green"
    },
    addStoryIcon: {
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
    profilePicture:{
       
    }

});