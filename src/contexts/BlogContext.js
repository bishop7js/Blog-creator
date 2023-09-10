import React, { useState, useReducer } from "react";

const BlogContext = React.createContext();

const blogsReducer = (state, action) => {
  switch (action.type) {
    case "add_blog":
      return [...state, `Blog post ${state.length}`];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  //   const [blogPosts, setBlogPosts] = useState(['Blog post 0']);
  const [blogPosts, distpatch] = useReducer(blogsReducer, []);
  const [number, setNumber] = useState(1);

//   console.log("AAAAAAAAAAAAAAAAAAaa", blogPosts.length);

  const AddBlogPosts = () => {
    distpatch({ type: "add_blog" });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, AddBlogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
