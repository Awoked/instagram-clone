import React from 'react'
import { Image, StyleSheet } from 'react-native'
import AssetImages from "../../../assets/AssetImages";

const Logo = ({ width = 120, height = 40, variant = "dark", styles }) => {
    return (
        <Image
            source={variant === "dark" ? AssetImages.logo : AssetImages.logoWhite}
            style={{
                width,
                height,
                resizeMode: "contain",
                ...styles
            }}
        />
    )
}

export default Logo
