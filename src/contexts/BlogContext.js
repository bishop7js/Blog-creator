import React, { useState, useReducer } from "react";

const BlogContext = React.createContext();

const blogsReducer = (state, action) => {
  switch (action.type) {
    case "add_blog":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_blog":
      return state.filter((item) => item.id !== action.payload);
    case "edit_blog":
      const editIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (editIndex !== -1) {
        const editedState = [...state];
        editedState[editIndex] = {
          ...editedState[editIndex],
          title: action.payload.title,
          content: action.payload.content,
        };
        return editedState;
      } else {
        return state;
      }

    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, distpatch] = useReducer(blogsReducer, []);

  const AddBlogPosts = (title, content) => {
    distpatch({ type: "add_blog", payload: { title, content } });
  };

  const deleteBlogPosts = (id) => {
    distpatch({ type: "delete_blog", payload: id });
  };

  const editBlogPosts = (title, content, id) => {
    distpatch({ type: "edit_blog", payload: { title, content, id } });
  };

  return (
    <BlogContext.Provider
      value={{ data: blogPosts, AddBlogPosts, deleteBlogPosts, editBlogPosts }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
