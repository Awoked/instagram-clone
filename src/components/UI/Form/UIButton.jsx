import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const UIButton = ({
    children,
    as = "button",
    position = "center",
    ...props
}) => {

    const buttonType = as === "button" ? "Button" : "TextButton";

    return (
        <TouchableOpacity
            {...props}
            activeOpacity={0.7}
        >
            <View
                style={[
                    styles[buttonType],
                    styles.position[position],
                    {
                        opacity: props.disabled ? 0.5 : 1,
                    }
                ]}
            >
                <Text
                    style={[
                        styles[buttonType].text,
                    ]}
                >
                    {children}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default UIButton

const styles = StyleSheet.create({
    Button: {
        paddingVertical: 14,
        backgroundColor: "#3797EF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        text: {
            fontSize: 14,
            fontWeight: 600,
            color: "#fff"
        }
    },
    TextButton: {

        text: {
            fontSize: 12,
            fontWeight: 500,
            color: "#3797EF"
        }
    },
    position: {
        left: {
            alignItems: "flex-start"
        },
        center: {
            alignItems: "center"
        },
        right: {
            alignItems: "flex-end"
        }
    }
})