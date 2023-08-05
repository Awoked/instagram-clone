import React, { useContext } from 'react'
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


    return {
        commentsData,
        showComments,
        openComments,
        closeComments
    }
}

export default useComment