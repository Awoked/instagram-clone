import React from 'react'
import { Image } from 'react-native'

const ProfilePicture = ({ styles = [], source, size = 32 }) => {
    return (
        <Image
            source={source ? source : {
                uri: "https://picsum.photos/200"
            }}
            style={[
                {
                    width: size,
                    height: size,
                    borderRadius: size,
                    borderWidth: 1,
                    borderColor: "rgba(0, 0, 0, 0.10)"
                },
                ...styles
            ]}
        />
    )
}

export default ProfilePicture