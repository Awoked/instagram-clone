import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ProfilePicture from '../UI/ProfilePicture'
import { Heart, IconComment, IconMore, IconSave, IconShare } from '../UI/Icons'
import useComment from '../../Hooks/useComment'

const PostCard = ({ userData, postData, }) => {

    const { openComments, initialCommentsData } = useComment();

    const [showMore, setShowMore] = useState(false);

    const showComments = () => {
        openComments();
        initialCommentsData(postData.comments);
    }

    const handleShowMore = () => {
        if (showMore) {
            showComments();
        } else {
            setShowMore(true)
        }
    }


    return (
        <View style={styles.wrapper}>
            <View
                style={styles.header}
            >
                <View style={styles.userInformation}>
                    <ProfilePicture
                        size={34}
                    />
                    <Text style={[styles.userNameText, styles.bold]}>
                        {userData.userName}
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
                    <TouchableOpacity
                        onPress={showComments}
                    >
                        <IconComment />
                    </TouchableOpacity>
                    <IconShare />
                </View>

                <View style={styles.processRight}>
                    <IconSave />
                </View>
            </View>

            <View style={styles.detailsWrapper}>
                <View style={styles.likes}>
                    <Text style={[styles.fs13, styles.bold]}>
                        100 Likes
                    </Text>
                </View>

                <View style={styles.details}>

                    <Text
                        numberOfLines={showMore ? undefined : 2}
                        onPress={handleShowMore}
                    >
                        <Text onPress={() => { console.log("Go To profile") }} style={[styles.fs14, styles.bold]}>
                            Alper&nbsp;
                        </Text>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatem magni iste totam reiciendis amet illum? Officiis nulla ratione consectetur rerum accusantium sint eaque error doloribus aliquid architecto, quam est.
                        </Text>
                    </Text>
                    <TouchableOpacity
                        onPress={showComments}
                    >
                        <Text
                            style={[styles.grayText, styles.fs14, { marginTop: 8 }]}
                        >
                            View all {postData.comments.length} comments
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={showComments}
                        style={styles.addComment}
                    >
                        <ProfilePicture size={34} />
                        <Text style={[styles.grayText, styles.fs14]}>
                            Add a comment...
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.grayText}>
                        5 hour ago
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default PostCard

const styles = StyleSheet.create({
    wrapper: {
    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 13,
        paddingVertical: 7,
        justifyContent: "space-between"
    },
    userNameText: {
        fontSize: 12,
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
    detailsWrapper: {
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
    },
    grayText: {
        color: "#6E6E6E",
        fontSize: 12
    },
    addComment: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingVertical: 10
    }
})