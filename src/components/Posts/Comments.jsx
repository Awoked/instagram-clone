import React, { useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, View, Dimensions, TouchableOpacity, TextInput, ScrollView, Platform, Text } from 'react-native'
import useComment from '../../customHooks/useComment'
import Comment from './Comment';
import ProfilePicture from '../UI/ProfilePicture';
import { IconArrowUp } from '../UI/Icons';

const Comments = () => {
    const { showComments, closeComments, commentsData, addComment } = useComment();

    const windowHeight = Dimensions.get('window').height;
    const translation = useRef(new Animated.Value(windowHeight)).current;

    const [addCommentText, setAddCommentText] = useState('');

    const handleAddComment = () => {
        // Data tipinin ayarlanması lazım backend eklendikten sonra
        addComment({
            userData: {
                userName: "Alper"
            },
            comment: addCommentText
        })
        setAddCommentText('');
    }


    useEffect(() => {
        if (showComments) {
            Animated.timing(translation, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(translation, {
                toValue: windowHeight,
                useNativeDriver: true,
            }).start();
        }
    }, [showComments])


    return (
        <Animated.View
            style={[
                styles.container,
                {
                    transform: [{ translateY: translation }]
                }
            ]}
        >
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.lineWrapper}
                    onPress={closeComments}
                >
                    <View style={styles.line}></View>

                </TouchableOpacity>
                <Text style={{ marginTop: 20 }}>
                    Comments
                </Text>
            </View>

            <ScrollView style={styles.commentsWrapper}>

                {
                    commentsData.length > 0 ?
                        commentsData.map((data, index) => (

                            <Comment
                                userData={data.userData}
                                comment={data.comment}
                                key={index}
                            />
                        ))
                        :
                        <></>
                }


            </ScrollView>
            <View style={styles.addCommentWrapper}>
                <ProfilePicture />
                <TextInput
                    placeholder='Add comment...'
                    value={addCommentText}
                    onChangeText={e => setAddCommentText(e)}
                    style={{ flex: 1 }}
                />
                {
                    addCommentText.length > 0 ?
                        <TouchableOpacity onPress={handleAddComment}>
                            <IconArrowUp size={24} />
                        </TouchableOpacity>
                        :
                        null
                }
            </View>
        </Animated.View>
    )
}

export default Comments;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderWidth: 1,
        borderColor: "#00000085",
        borderBottomWidth: Platform.OS === "android" ? 1 : 0,
    },
    header: {
        borderBottomWidth: 2,
        borderColor: "#000000ee",
        alignItems: "center",
        paddingBottom: 10
    },
    commentsWrapper: {
        flex: 1,
        width: "100%",
        padding: 10,
    },
    lineWrapper: {
        padding: 10,
        width: "100%",
        alignItems: "center",
    },
    line: {
        width: 50,
        height: 5,
        borderRadius: 6,
        backgroundColor: "#424242"
    },
    addCommentWrapper: {
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    }
})