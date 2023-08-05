import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, View, Dimensions, TouchableOpacity, TextInput, ScrollView, Platform, Text } from 'react-native'
import useComment from '../../customHooks/useComment'
import Comment from './Comment';

const Comments = () => {
    const { showComments, closeComments } = useComment();

    const windowHeight = Dimensions.get('window').height;

    const translation = useRef(new Animated.Value(windowHeight)).current;

    useEffect(() => {
        console.log(showComments)
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
                <Text style={{marginTop: 20}}>
                    Comments
                </Text>
            </View>

            <ScrollView style={styles.commentsWrapper}>
                <Comment
                    userData={{ userName: "alper" }}
                    comment={"Lorem ipsum asdasd"}
                />
            </ScrollView>
            <View style={{ backgroundColor: "red", width: "100%" }}>
                <TextInput />
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
        padding: 10
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
    }
})