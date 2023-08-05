import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ProfilePicture from '../UI/ProfilePicture'
import { Heart, IconComment, IconMore, IconSave, IconShare } from '../UI/Icons'
import Comment from './Comment'

const PostCard = ({ userData, postData, }) => {
    return (
        <View style={styles.wrapper}>
            <View
                style={styles.header}
            >
                <View style={styles.userInformation}>
                    <ProfilePicture
                        size={40}
                    />
                    <Text style={styles.userName}>
                        UserName
                    </Text>
                </View>
                <IconMore size={12} />
            </View>

            <View style={styles.cover}>
                <Image
                    source={{
                        uri: `https://picsum.photos/id/${Math.floor(Math.random() * 200)}/768/1024`
                    }}
                    style={styles.postImage}
                />
            </View>

            <View style={styles.process}>
                <View style={styles.processLeft}>
                    <Heart />
                    <IconComment />
                    <IconShare />
                </View>

                <View style={styles.processRight}>
                    <IconSave />
                </View>
            </View>

            <View style={styles.commentsWrapper}>
                <View style={styles.likes}>

                </View>

                <View style={styles.comments}>
                    <Text style={[styles.fs13, styles.bold]}>
                        100 Likes
                    </Text>

                    <Comment 
                        userData={{userName: "Alper"}}
                        comment={"Lorem ipsum dolor sit amet"}
                    />
                </View>
            </View>
        </View>
    )
}

export default PostCard

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 13,
        paddingVertical: 7,
        justifyContent: "space-between"
    },
    userName: {
        fontSize: 12,
        fontWeight: 700
    },
    postImage: {
        width: "100%",
        height: 500
    },
    userInformation: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    process: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    processLeft: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 12
    },
    processRight: {
        flexDirection: "row",
        alignItems: 'center'
    },
    commentsWrapper: {
        paddingHorizontal: 12
    },
    bold: {
        fontWeight: 700
    },
    fs14: {
        fontSize: 14,
    },
    fs13: {
        fontSize: 13
    }
})