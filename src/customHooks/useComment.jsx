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

    const initialCommentsData = (data) =>{
        setCommentsData(data)
    }

    return {
        commentsData,
        showComments,
        openComments,
        closeComments,
        initialCommentsData
    }
}

export default useComment