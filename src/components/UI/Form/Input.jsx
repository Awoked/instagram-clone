import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const Input = ({ ...props }) => {
    return (
        <View
            style={styles.inputWrapper}
        >
            <TextInput
                style={styles.input}
                {...props}
                
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputWrapper: {
        width: "100%",
        flexDirection: "row"
    },
    input: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#00000010",
        fontSize: 14,
        color: "#262626"
    }
})