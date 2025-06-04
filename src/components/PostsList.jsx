import axios from "axios";
import { useEffect, useState } from "react";

import PostCard from "./PostCard";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  return (
    <div className="row row-cols-2 g-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
