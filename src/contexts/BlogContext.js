import React, { useState, useReducer } from "react";

const BlogContext = React.createContext();

const blogsReducer = (state, action) => {
  console.log("AAAAAAAAAAAAAAAA", state);

  switch (action.type) {
    case "add_blog":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content
        },
      ];
    case "delete_blog":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, distpatch] = useReducer(blogsReducer, []);

  //   console.log("AAAAAAAAAAAAAAAAAAaa", blogPosts);

  const AddBlogPosts = (title, content) => {
    distpatch({ type: "add_blog", payload:{title, content} });
  };

  const deleteBlogPosts = (id) => {
    distpatch({ type: "delete_blog", payload: id });
  };

  return (
    <BlogContext.Provider
      value={{ data: blogPosts, AddBlogPosts, deleteBlogPosts }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
