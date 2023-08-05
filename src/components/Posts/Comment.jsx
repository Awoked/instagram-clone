import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Comment = ({ userData, comment }) => {

    const [showMore, setShowMore] = useState(false);

    const handleShow = () => {
        if (showMore) {
            setShowMore(false)
        } else {
            setShowMore(true)
        }
    }

    return (
        <View style={styles.textWrapper}>
            <Text
                numberOfLines={showMore ? undefined : 2}
                onPress={handleShow}
            >
                <Text onPress={() => { console.log("Go To profile") }} style={[styles.fs14, styles.bold]}>
                    {userData?.userName}&nbsp;
                </Text>
                <Text>
                    {comment}
                </Text>
            </Text>
        </View>
    )
}

export default Comment

const styles = StyleSheet.create({
    fs14: {
        fontSize: 14,
    },
    bold: {
        fontWeight: 700
    }
})