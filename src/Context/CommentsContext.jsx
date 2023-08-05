
import React, { createContext, useState } from "react";

const CommentContext = createContext();

const CommentProvider = ({ children }) => {
    const [commentsData, setCommentsData] = useState([]);
    const [showComments, setShowComments] = useState(false);

    return (
        <CommentContext.Provider
            value={{
                commentsData,
                setCommentsData,
                showComments,
                setShowComments
            }}
        >
            {children}
        </CommentContext.Provider>
    )
}

export { CommentProvider, CommentContext };