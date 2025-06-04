import axios from "axios";
import { createContext, createContext, useEffect, useState } from "react";

const PostContext = createContext();

function PostProvider({ child }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data.data);
    });
  });

  return <PostContext.Provider value={{ posts }}>{child}</PostContext.Provider>;
}

function usePost() {
  return useContext(PostContext);
}

export { PostProvider, usePost };
