import React from 'react'
import { StyleSheet, View } from 'react-native'
import Logo from "../UI/Logo";
import { Heart, MessangerIcon } from '../UI/Icons';
const Header = () => {
    return (
        <View style={[
            styles.container,
            // styles.sticky
        ]}>
            <Logo />
            <View style={styles.process}>
                <Heart size={26} />
                <MessangerIcon size={26} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 5,
        justifyContent: "space-between",
        alignItems: "center"
    },
    process: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    sticky:{
        position: "absolute",
        zIndex: 3,
        backgroundColor: "#fff",
        width: "100%",
    }
})