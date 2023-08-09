import React, { useContext, useEffect } from 'react'
import { CommentContext } from '../Context/CommentsContext'

const useComment = () => {
    const {
        commentsData,
        setCommentsData,
        showComments,
        setShowComments
    } = useContext(CommentContext);


    const openComments = () => setShowComments(true);

    const closeComments = () => setShowComments(false);

    const initialCommentsData = (data) => {
        setCommentsData(data)
    }

    const addComment = (commentData) => {
        setCommentsData((snap) => [
            commentData,
            ...snap
        ])
    }

    return {
        commentsData,
        showComments,
        openComments,
        closeComments,
        initialCommentsData,
        addComment
    }
}

export default useComment