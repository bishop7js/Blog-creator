import React from "react";

const BlogContext = React.createContext();

const blogPosts = [
    {
        name: "Blog 001"
    },
    {
        name: "Blog 002"
    },
    {
        name: "Blog 003"
    },
    {
        name: "Blog 004"
    }, 
]

export const BlogProvider = ({children}) => {
    return (
        <BlogContext.Provider value={blogPosts}>
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext;