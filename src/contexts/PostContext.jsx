import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";

const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
}

function usePost() {
  return useContext(PostContext);
}

export { PostProvider, usePost };
