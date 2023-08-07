import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PostCard from '../Posts/PostCard'

const Posts = () => {

    const [postPlaceholderData, setPostPlaceholderData] = useState([
        {
            userData: {
                userName: "Alper"
            },
            postData: {
                description: `                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatem magni iste totam reiciendis amet illum? Officiis nulla ratione consectetur rerum accusantium sint eaque error doloribus aliquid architecto, quam est.           `,
                comments: [
                    {
                        userData: {
                            userName: "Alper"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                    {
                        userData: {
                            userName: "Alper"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                    {
                        userData: {
                            userName: "Alper"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                    {
                        userData: {
                            userName: "Alper"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                    {
                        userData: {
                            userName: "Alper"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                    {
                        userData: {
                            userName: "Alper"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                    {
                        userData: {
                            userName: "Alper"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                    {
                        userData: {
                            userName: "Alper"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                    {
                        userData: {
                            userName: "Alper"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                    {
                        userData: {
                            userName: "Alper"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                    {
                        userData: {
                            userName: "Alper"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                ]
            }
        },
        {
            userData: {
                userName: "Alper"
            },
            postData: {
                description: `                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatem magni iste totam reiciendis amet illum? Officiis nulla ratione consectetur rerum accusantium sint eaque error doloribus aliquid architecto, quam est.           `,
                comments: [
                    {
                        userData: {
                            userName: "Tahir"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                    {
                        userData: {
                            userName: "Tahir"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                    {
                        userData: {
                            userName: "Tahir"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                    {
                        userData: {
                            userName: "Tahir"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                ]
            }
        },
        {
            userData: {
                userName: "Tahir"
            },
            postData: {
                description: `                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatem magni iste totam reiciendis amet illum? Officiis nulla ratione consectetur rerum accusantium sint eaque error doloribus aliquid architecto, quam est.           `,
                comments: [
                    {
                        userData: {
                            userName: "Berke"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                    {
                        userData: {
                            userName: "Berke"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                    {
                        userData: {
                            userName: "Berke"
                        },
                        comment: `Lorem ipsum dolor sit amet kasjdqkd jqdklqwjd jwkqldjqw jfkhasf`
                    },
                ]
            }
        },
    ])
    return (


        <View style={styles.wrapper}>
            {
                postPlaceholderData.map((data, index) => (
                    <PostCard
                        postData={data.postData}
                        userData={data.userData}
                        key={index}
                    />
                ))
            }
        </View>
    )
}

export default Posts

const styles = StyleSheet.create({
    wrapper: {
        gap: 4
    }
})